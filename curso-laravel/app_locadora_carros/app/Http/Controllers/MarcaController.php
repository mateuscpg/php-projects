<?php

namespace App\Http\Controllers;

use App\Models\Marca;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class MarcaController extends Controller
{

    protected $marca;
    public function __construct(Marca $marca){
        $this->marca = $marca;  // Variável do model para ser utilizado no controller.
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $marcas = Marca::all();
        return $marcas;
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
        //stateless validation
        $request->validate($this->marca->rules(), $this->marca->feedback());
        
        $imagem = $request->file('imagem');      //Recupera a imagem que está vindo como request
        $imagem_urn = $imagem->store('imagens/marcas', 'public');      //Seta a imagem com um determinado id na pasta public do storage (segundo configuração do filesystem)

        $marca = $this->marca->create([
            'nome' => $request->nome,
            'imagem' => $imagem_urn,
        ]);
        // ou
        // $marca->nome = $request->nome;
        // $marca->imagem = $imagem_urn;
        // $marca->save();

        return response()->json($marca, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  Integer
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $marca = $this->marca->find($id);
        if($marca){
            return $marca;
        }
            return response()->json(['msg' => 'Marca não encontrada'], 404);
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Marca  $marca
     * @return \Illuminate\Http\Response
     */
    public function edit(Marca $marca)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  Integer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // print_r($request->all());
        // echo '<hr>';
        // print_r($marca->getAttributes());
        $marca = $this->marca->find($id);
        if($marca === null){
            return response()->json( ['msg' => 'Marca não encontrada, impossível atualizar!'], 404);
        }
        if($request->method() === 'PATCH'){
            $regrasDinamicas = array();

            //Percorrendo todas as regras definidas no model
            foreach($marca->rules() as $input => $regra){
                
                //Coleta apenas as regras aplicáveis aos parâmetros parciais da requisição
                if(array_key_exists($input, $request->all())){
                    $regrasDinamicas[$input] = $regra;
                }
            }
            $request->validate($regrasDinamicas, $marca->feedback());

            }
            else{
                $request->validate($marca->rules(), $marca->feedback());
            }

            //Remove o arquivo antigo caso um novo arquivo tenha sido
            //enviado no request.
            if ($request->file('imagem')) {
                Storage::disk('public')->delete($marca->imagem);
            }

            $imagem = $request->file('imagem');      //Recupera a imagem que está vindo como request
            $imagem_urn = $imagem->store('imagens', 'public');      //Seta a imagem com um determinado id na pasta public do storage (segundo configuração do filesystem)
    
            $marca->update([
                'nome' => $request->nome,
                'imagem' => $imagem_urn,
            ]);
            return response()->json($marca, 200);

    }
    
    /**
     * Remove the specified resource from storage.
     *
     * @param  Integer
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $marca = $this->marca->find($id);
        if ($marca === null) {
            return response()->json(['msg' => 'Marca não encontrada, impossível deletar!'], 404);
        }

        //Remove o arquivo antigo
        Storage::disk('public')->delete($marca->imagem);

        $marca->delete(); 
        return ['msg'=> 'A marca foi removida com sucesso!'];
    }
}
