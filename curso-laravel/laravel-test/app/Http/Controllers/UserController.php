<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function getUsers()
    {
        $users = User::all();
        foreach ($users as $key => $user){
            $user->nextId = $key + 1 < $users->count() ? $users[$key +1]->id : null;
        }
        return response()->json($users);
    }

    public function getUser($id)
    {
        return User::findOrFail($id);
    }

}
