<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    public function index(){
        return view('app');
    }

    public function createUser(Request $request){
        User::create([
            'name' => $request['name'],
            'email' => $request['email'],
            'password' => $request['name'],
            'birth' => $request['birth'],
            'id_cms_privileges' => 0,
            'id_netflix' => 0,
            'id_hbo' => 0,
            'id_primevideo' => 0,
            'id_paramount' => 0,
            'id_starplus' => 0,
        ]);
    }

    public function getUser(){
        $user = Auth::id();
        User::find($user);

    }

}
