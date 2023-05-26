<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use ReturnTypeWillChange;

class LoginController extends Controller
{
    public function index(Request $request){

        $erro = '';
        
        
        if($request->get('erro')== 1){
            $erro = 'O usuário e/ou senha não existe!';
        }
        elseif($request->get('erro')== 2){
            $erro = 'Necessário realizar login para ter acesso a página';
        }
        

        return view('site.login', ['titulo' => 'Login', 'erro' => $erro]);
    }

    public function autenticar(Request $request){

        $regras = [
            'email' => 'email',
            'senha' => 'required'
        ];

        $feedback = [
            'email.email' => 'Informe um email válido',
            'senha.required' => 'Informe uma senha válida'
        ];
        $request->validate($regras, $feedback);

        $email = $request->get('email');
        $password = $request->get('senha');

        $user = User::where('email', $email)
                ->where('password', $password)
                ->get()
                ->first();

        if(isset($user->name )){
            session_start();
            $_SESSION['nome'] = $user->name;
            $_SESSION['email'] = $user->email;

            return redirect()->route('app.home');

        }else{
            return redirect()->route('site.login', ['erro' => 1]);
        }

    }
    public function sair(){

        session_destroy();
        return redirect()->route('site.login');
    }
}
