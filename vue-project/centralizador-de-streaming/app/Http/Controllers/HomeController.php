<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    
    public function index()
{
    $user = Auth::user();
    return response()->view('app', ['user' => $user])
                    ->header('Cache-Control', 'no-cache, no-store, max-age=0, must-revalidate');
}


}
