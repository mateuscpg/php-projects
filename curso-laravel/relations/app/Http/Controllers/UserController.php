<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $users = User::all();
        return $users;
    }

    public function create(Request $request)
    {
        $user = User::create($request->only(['name', 'email', 'password', 'address_id']));
        return $user;
}
    public function findOne(Request $request)
    {
        $user = User::find($request->id);
        $user ['addresses'] = $user -> addresses;
        return $user;
    }

    public function delete(User $id)
    {
        $id->delete();
        return 'Deletado';
    }

}
