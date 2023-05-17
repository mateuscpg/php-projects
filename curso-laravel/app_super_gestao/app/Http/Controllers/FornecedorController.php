<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FornecedorController extends Controller
{
    public function index(Request $request){

        $fornecedores = [
            0 => [
                'nome' => 'Fornecedor 1',
                'status' => 'N',
                'cnpj'=>'00.000.000.000-00',
                'ddd'=> '11',                //São Paulo (SP)
                'telefone'=>'00000-0000'
                ],
            1 => [
                'nome' => 'Fornecedor 2', 
                'status' => 'S',
                'cnpj' => null,
                'ddd'=> '83',               //João Pessoa(PB)
                'telefone'=>'00000-0000'
            ],
            2 => [
                'nome' => 'Fornecedor 3',
                'status' => 'S',
                'cnpj' => null, 
                'ddd'=> '32',               //Juíz de Fora(MG)
                'telefone'=>'00000-0000'
                ],
        ];

        return view('app.fornecedor.index', compact("fornecedores"));
    }
}
