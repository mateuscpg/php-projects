<?php

namespace App\Http\Controllers;
use Illuminate\Pagination\Paginator;
use App\Models\Fornecedor;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class FornecedorController extends Controller
{
    public function index(Request $request){

        return view('app.fornecedor.index');
    }

    public function listar(Request $request){

        $fornecedores = Fornecedor::with(['produtos'])->where('nome', 'like', '%'.$request->input('nome').'%')
        ->where('site', 'like', '%'.$request->input('site').'%')
        ->where('uf', 'like', '%'.$request->input('uf').'%')
        ->where('email', 'like', '%'.$request->input('email').'%')
        ->paginate(5);

        return view('app.fornecedor.listar', ['fornecedores' => $fornecedores, 'request' => $request->all() ]);
    }
    public function adicionar(Request $request){

        $msg = '';

        //Cadastro
        if($request->input('_token') != '' && $request->input('id') == ''){
            //validação
            $regras = [ 
                'nome' => 'required|min:3|max:40',
                'site' =>  'required',
                'uf' =>  'required|min:2|max:2',
                'email' =>  'email'
            ];

            $feedback = [
                'required' => 'O campo :attribute deve ser preenchido',
                'nome.min' => 'Insira no mínimo 3 caracteres',
                'nome.max' => 'Insira no máximo 40 caracteres',
                
                'uf.min' => 'Insira no mínimo 2 caracteres',
                'uf.max' => 'Insira no máximo 2 caracteres',

                'email.email' => 'Insira um email válido '

            ];

            $request->validate($regras, $feedback);

           Fornecedor::create($request->all());

           $msg = 'Cadastro realizado com sucesso';
        }

        //Edição
        if($request->input('_token') != '' && $request->input('id') != ''){
            $fornecedor = Fornecedor::find($request->input('id'));
            $update = $fornecedor->update($request->all());

            if ($update){
                $msg= 'Atualização realizada com sucesso!';
            }else{
                $msg= 'Erro ao atualizar o registro!';
            }
            return redirect()->route('app.fornecedor.editar', ['id' => $request->input('id'),'msg' => $msg]);
            
        }

        return view('app.fornecedor.adicionar', ['msg' => $msg]);
    }

    public function editar($id, $msg = ''){

        $fornecedor = Fornecedor::find($id);

        return view('app.fornecedor.adicionar', ['fornecedor' => $fornecedor, 'msg' => $msg]);
    }

    public function excluir($id){
        Fornecedor::find($id)->delete();
        
        return redirect()->route('app.fornecedor');
    }

}
