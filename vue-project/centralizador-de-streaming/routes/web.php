<?php

use App\Http\Controllers\GeralController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\MovieController;
use App\Http\Controllers\UserController;
use App\Routes\Movie\Movie;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Movie::movie();



Route::get('/', function () {
    return view('app');
});
Route::get('/sair', [GeralController::class, 'sair']);
Route::post('/login', [UserController::class, 'login']);

Route::post('/create-user', [UserController::class, 'createUser']);

Route::get('/get-user', [GeralController::class, 'getUser']);
Route::get('/get-streaming', [MovieController::class, 'getStreaming']);

Route::get('/{any}',[HomeController::class, 'index'])->where('any', '.*');
