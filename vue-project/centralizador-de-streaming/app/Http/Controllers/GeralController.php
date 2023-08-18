<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class GeralController extends Controller
{
    public function getUser()
    {
        // return Auth::user();
    }
    public function sair()
    {
        // Auth::logout();
        return redirect('/login');
    }
}
