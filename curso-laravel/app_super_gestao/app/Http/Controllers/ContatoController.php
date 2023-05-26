<?php

namespace App\Http\Controllers;

use App\Models\MotivoContato;
use App\Models\SiteContato;
use Illuminate\Http\Request;

class ContatoController extends Controller
{
    public function contato(Request $request)
    {
        $motivo_contatos = MotivoContato::all();
    
        return view('site.contato', ['titulo' => 'Contato', 'motivo_contatos' => $motivo_contatos]);
    }
    public function salvarcontato(Request $request){

        $request->validate([
            'nome' => 'required|min:3|max:50',
            'telefone' => 'required|max:16',
            'email' => 'email|required|unique:site_contatos',
            'motivo_contatos_id' => 'required',
            'mensagem' => 'required|max:200'
        ],
        [
            'nome.required' =>' O campo nome precisa ser informado',
            'nome.min' =>'O campo nome precisa possuir no mínimo 3 caracteres',
            'nome.max' =>'O campo nome precisa possuir no máximo 3 caracteres',

            'telefone.required' =>'O campo telefone precisa ser informado',
            'telefone.max' =>'O campo telefone precisa possuir no máximo 16 caracteres',

            'email.email' =>'Digite um email válido',
            'email.unique' =>'Email já cadastrado',


            'motivo_contatos_id.required' =>'O campo motivos precisa ser informado',
            
            'mensagem.required' =>'O campo mensagem precisa ser informado',
            'mensagem.max' =>'O campo mensagem precisa possuir no máximo 200 caracteres ',
        ]
    
    );
        SiteContato::create($request->all());

        return redirect()->route('site.index');

    // OU
    //    SiteContato::create([
    //     'nome'=> $request['nome'],
    //     'telefone'=> $request['telefone'],
    //     'email'=> $request['email'],
    //     'motivo_contato'=> $request['motivo_contato'],
    //     'mensagem'=> $request['mensagem'],
    //    ]);

    }

}
