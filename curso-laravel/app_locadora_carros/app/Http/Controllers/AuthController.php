<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login (Request $request){

        $credenciais = $request->all(['email', 'password']);
        
        //Autenticação de email e senha
        $token = auth('api')->attempt($credenciais);
    
        if ($token){
            //retornar um Json   Token do usuário autenticado
            return response()->json(['token'=> $token], 202);
        }
        
        return response()->json( ['erro '=>'Usuário ou senha inválido!'], 403);

        //401 = Unauthorized -> Não autorizado
        //403 = Forbidden    -> Proibido(login inválido)
    }
    public function logout (){
        auth('api')->logout();
        return response()->json(['msg' => 'Usuário deslogado']);
    }
    public function refresh(){
        $token = auth('api')->refresh(); //Necessário que o client envie um JWT válido
        return response()->json(['token' => $token]);
    }
    public function me(){
        return response()->json(auth()->user(), 200);
    }
}
