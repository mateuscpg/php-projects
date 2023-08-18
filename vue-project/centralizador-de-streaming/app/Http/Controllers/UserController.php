<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function createUser(Request $request)
{
    
    // $validatedData = $request->validate([
    //     'name' => 'required|string',
    //     'email' => 'required|email|unique:users',
    //     'password' => 'required|string',
    //     'birth' => 'required|string',
    //     'hbo' => 'required',
    //     'netflix' => 'required',
    //     'primevideo' => 'required',
    //     'paramount' => 'required',
    //     'starplus' => 'required',
    // ]);
    User::create([
        'name' => $request['name'],
        'email' => $request['email'],
        'password' => Hash::make($request['password']),
        'birth' => $request['birth'],
        'id_cms_privileges' => 2,
        'id_netflix' => $request['netflix'],
        'id_hbo' => $request['hbo'],
        'id_primevideo' => $request['primevideo'],
        'id_paramount' => $request['paramount'],
        'id_starplus' => $request['starplus'],
    ]);

    return response()->json(['message' => 'User created successfully']);
}

    public function loginUser(Request $request)
    {
        $message = [];
        $user = User::where('email', $request['email'])->first();
        $credentials = $request->only('email', 'password');
        

        if (!Hash::check($request['password'], $user->password)){
            $message['password'] = 'Senha inválida';
            return response()->json(["success" => false, 'message' => $message], 400);
        }

        Auth::attempt($credentials);
        $user_auth = Auth::user();
        return response()->json(["success" => true, 'message' => $message, 'user_auth' => $user_auth]);
    }

}
