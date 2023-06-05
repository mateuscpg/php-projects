<?php

namespace App\Http\Controllers;

use App\Models\Pedido;
use App\Models\PedidoProduto;
use App\Models\Produto;
use Illuminate\Http\Request;

class PedidoProdutoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Pedido $pedido)
    {
        $produtos = Produto::all();
        // $pedido->produtos; // eager loading
        return view('app.pedido_produto.create', ['pedido' => $pedido, 'produtos' => $produtos]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Pedido $pedido)
    {
        $regras = [
            'produto_id' => 'exists:produtos,id',
            'quantidade' => 'required'
        ];
        $feedback = [
            'produto_id.exists' => 'O produto informado não existe',
            'quantidade.required' => "O campo ':attribute' precisa ser informado"
        ];
        $request->validate($regras, $feedback);
        
        // $pedido_produto = new PedidoProduto();
        // $pedido_produto->pedido_id = $pedido->id;
        // $pedido_produto->produto_id = $request->get('produto_id');
        // $pedido_produto->quantidade = $request->get('quantidade');
        // $pedido_produto->save();
        
        // ouuu
        $pedido->produtos()->attach(
            $request->get('produto_id'),
            ['quantidade'=> $request->get('quantidade')]
        );
        return redirect()->route('pedido-produto.create', ['pedido'=> $pedido->id]);        

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function destroy(PedidoProduto $pedidoProduto, $pedido_id)
    {
        // 1º Método
        // PedidoProduto::where([
        //     'pedido_id' => $pedido->id,
        //     'produto_id' => $produto->id
        //    ])->delete();

        // 2º Método (detach - deleta pelo relacionamento NxN)
            // $pedido->produtos()->detach($produto->id);
            $pedidoProduto->delete();
        
            return redirect()->route('pedido-produto.create', ['pedido' => $pedido_id]);
    }   
}
