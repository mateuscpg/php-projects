<?php

namespace App\Http\Controllers;

use App\Models\Modelo;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ModeloController extends Controller
{
    protected $modelo;
    public function __construct(Modelo $modelo){
        $this->modelo = $modelo;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $modelos = array();
        
        // Tem o atributo: atributo_marca? Se tiver, atribua à $modelos a intância do Model com
        // o relacionamento definido neste Model, mostrando o que tiver vindo como request.
        $request->has('atributos_marca') ? $modelos = $this->modelo->with('marca:id,'.$request->atributos_marca)
       : $modelos = $this->modelo->with('marca');
       
         // Tem o atributo: atributo? Se tiver, atribua à $modelos o modelo definido antes
         // mostrando o que tiver vindo como request.
        $request->has('atributos') ? $modelos= $modelos->selectRaw($request->atributos)->get()
        : $modelos = $modelos->get();
        //Esse tipo de select(selectRaw) consegue lidar com tipos de consulta como "id, nome, imagem" ao invés de 'id', 'nome', 'imagem';

        return response()->json($modelos, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate($this->modelo->rules());

        $imagem = $request->file('imagem');
        $imagem_urn = $imagem->store('imagens/modelos', 'public');

        $modelo = $this->modelo->create([
            'marca_id' => $request->marca_id,
            'nome' => $request->nome,
            'imagem' => $imagem_urn,
            'numero_portas' => $request->numero_portas,
            'lugares' => $request->lugares,
            'air_bag' => $request->air_bag,
            'abs' => $request->abs,
        ]);

        return response()->json($modelo, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  Integer  $modelo
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $modelo = $this->modelo->with('marca')->find($id);
        if ($modelo == null){
            return response()->json(['msg' => 'Modelo não encontrado'], 404);
        }
        return response()->json($modelo, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Modelo  $modelo
     * @return \Illuminate\Http\Response
     */
    public function edit(Modelo $modelo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  Integer  $modelo
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $modelo = $this->modelo->find($id);
        if($modelo === null){
            return response()->json( ['msg' => 'Modelo não encontrado, impossível atualizar!'], 404);
        }
        if($request->method() === 'PATCH'){
            $regrasDinamicas = array();

            //Percorrendo todas as regras definidas no model
            foreach($modelo->rules() as $input => $regra){
                
                //Coleta apenas as regras aplicáveis aos parâmetros parciais da requisição
                if(array_key_exists($input, $request->all())){
                    $regrasDinamicas[$input] = $regra;
                }
            }
            $request->validate($regrasDinamicas);

            }
            else{
                $request->validate($modelo->rules());
            }

            //Remove o arquivo antigo caso um novo arquivo tenha sido
            //enviado no request.
            if ($request->file('imagem')) {
                Storage::disk('public')->delete($modelo->imagem);
            }
            
            $imagem = $request->file('imagem');                        //Recupera a imagem que está vindo como request
            $imagem_urn = $imagem->store('imagens/modelos', 'public'); //Seta a imagem com um determinado id na pasta public do storage (segundo configuração do filesystem)
            
            $modelo->fill($request->all());
            $modelo->imagem= $imagem_urn;
            $modelo->save();
            // $modelo->update([
            //     'marca_id' => $request->marca_id,
            //     'nome' => $request->nome,
            //     'imagem' => $imagem_urn,
            //     'numero_portas' => $request->numero_portas,
            //     'lugares' => $request->lugares,
            //     'air_bag' => $request->air_bag,
            //     'abs' => $request->abs,
            // ]);
            return response()->json($modelo, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Integer  $modelo
     * @return \Illuminate\Http\Response
     */
    public function destroy ($id)
    {
        $modelo = $this->modelo->find($id);

        if ($modelo === null) {
            return response()->json(['msg'=> 'Modelo não encontrado'], 404);
        }
        Storage::disk('public')->delete($modelo->imagem);

        $modelo->delete();
        return response()->json(['msg'=> 'Modelo deletado com sucesso'], 200);
    }
}
