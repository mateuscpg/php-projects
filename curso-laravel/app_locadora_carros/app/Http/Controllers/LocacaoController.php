<?php

namespace App\Http\Controllers;

use App\Models\Locacao;
use App\Repositories\LocacaoRepository;
use Illuminate\Http\Request;

class LocacaoController extends Controller
{
    protected $locacao;
    public function __construct(Locacao $locacao){
        $this->locacao = $locacao;  // Variável do model para ser utilizado no controller.
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $locacaoRepository = new LocacaoRepository($this->locacao);

        if($request->has('filtro')){
            $locacaoRepository->filtro($request->filtro);
        }

        if($request->has('atributos')){
           $locacaoRepository->selectAtributos($request->atributos);
        }

        return response()->json($locacaoRepository->getResultado(), 200);
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
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //stateless validation
        $request->validate($this->locacao->rules());
        
        
        $locacao = $this->locacao->create([
            'cliente_id' => $request->cliente_id,
            'carro_id'  => $request->carro_id,
            'data_inicio_periodo'  => $request->data_inicio_periodo,
            'data_final_previsto_periodo'  => $request->data_final_previsto_periodo,
            'data_final_realizado_periodo'  => $request->data_final_realizado_periodo,
            'valor_diaria'  => $request->valor_diaria,
            'km_inicial'  => $request->km_inicial,
            'km_final' => $request->km_final,
            
        ]);
        return response()->json($locacao, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  Integer 
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $locacao = $this->locacao->find($id);
        if($locacao){
            return response()->json([$locacao, 200]);
        }
            return response()->json(['erro' => 'Locacao não encontrada'], 404);
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Locacao  $locacao
     * @return \Illuminate\Http\Response
     */
    public function edit(Locacao $locacao)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateLocacaoRequest  $request
     *  @param Integer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $locacao = $this->locacao->find($id);
        if($locacao === null){
            return response()->json( ['msg' => 'Locacao não encontrada, impossível atualizar!'], 404);
        }
        if($request->method() === 'PATCH'){
            $regrasDinamicas = array();

            //Percorrendo todas as regras definidas no model
            foreach($locacao->rules() as $input => $regra){
                
                //Coleta apenas as regras aplicáveis aos parâmetros parciais da requisição
                if(array_key_exists($input, $request->all())){
                    $regrasDinamicas[$input] = $regra;
                }
            }
            $request->validate($regrasDinamicas);

            }
            else{
                $request->validate($locacao->rules());
            }
            $locacao->fill($request->all());
            $locacao->save();
           
            return response()->json($locacao, 200);
    }
    /**
     * Remove the specified resource from storage.
     *
    * @param  Integer
    * @return \Illuminate\Http\Response
    */
    public function destroy($id)
    {
        $locacao = $this->locacao->find($id);
        if ($locacao === null) {
            return response()->json(['msg' => 'Locacao não encontrada, impossível deletar!'], 404);
        }
        $locacao->delete(); 
        return ['msg'=> 'A locacao foi removida com sucesso!'];
    }
}
