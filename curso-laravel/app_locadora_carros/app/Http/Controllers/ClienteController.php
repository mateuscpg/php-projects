<?php

namespace App\Http\Controllers;

use App\Models\Cliente;
use App\Repositories\ClienteRepository;
use Illuminate\Http\Request;

class ClienteController extends Controller
{

    protected $cliente;
    public function __construct(Cliente $cliente){
        $this->cliente = $cliente;  // Variável do model para ser utilizado no controller.
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $clienteRepository = new ClienteRepository($this->cliente);

        if($request->has('filtro')){
            $clienteRepository->filtro($request->filtro);
        }

        if($request->has('atributos')){
           $clienteRepository->selectAtributos($request->atributos);
        }

        return response()->json($clienteRepository->getResultado(), 200);
    }

  
    /**
     * Store a newly created resource in storage.
     *
     * @param  Integer
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //stateless validation
        $request->validate($this->cliente->rules());
        
        $cliente = $this->cliente->create([
            'nome' => $request->nome,
        ]);

        return response()->json($cliente, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  Integer
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $cliente = $this->cliente->find($id);
        if($cliente){
            return $cliente;
        }
            return response()->json(['msg' => 'Cliente não encontrado'], 404);
        
    }

  
    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateClienteRequest  $request
     * @param  Integer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $cliente = $this->cliente->find($id);
        if($cliente === null){
            return response()->json( ['msg' => 'cliente não encontrado, impossível atualizar!'], 404);
        }
        if($request->method() === 'PATCH'){
            $regrasDinamicas = array();

            //Percorrendo todas as regras definidas no model
            foreach($cliente->rules() as $input => $regra){
                
                //Coleta apenas as regras aplicáveis aos parâmetros parciais da requisição
                if(array_key_exists($input, $request->all())){
                    $regrasDinamicas[$input] = $regra;
                }
            }

            $request->validate($regrasDinamicas);
            
            }
            else{
                $request->validate($cliente->rules());
            }        

            $cliente->fill($request->all());
            $cliente->save();

            return response()->json($cliente, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Integer
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $cliente = $this->cliente->find($id);
        if ($cliente === null) {
            return response()->json(['msg' => 'Cliente não encontrado, impossível deletar!'], 404);
        }

        $cliente->delete(); 
        return ['msg'=> 'O Cliente foi removido com sucesso!'];
    }
}
