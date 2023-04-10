<?php


use App\Http\Controllers\AuthController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\TaskController;
use Illuminate\Support\Facades\Route;


//MIDDLEWARE AUTH -> Protege todas as rotas, não deixando acessar
//se não fez login
Route::middleware(['auth'])->group(function (){
    //ROTAS DA HOME
    Route::get('/',[HomeController::class, 'index'])->name('home');

//ROTAS DAS TASKS
    Route::get('/task/new',[TaskController::class, 'create'])->name('tasks.create');
    Route::post('/task/create_action',[TaskController::class, 'create_action'])->name('tasks.create_action');
    Route::get('/task/edit',[TaskController::class, 'edit'])->name('tasks.edit');
    Route::get('/task/delete',[TaskController::class, 'delete'])->name('tasks.delete');
    Route::get('/task',[TaskController::class, 'index'])->name('tasks.view');
    Route::post('/task/edit_action',[TaskController::class, 'edit_action'])->name('tasks.edit_action');
    Route::get('/logout',[AuthController::class, 'logout'])->name('logout');
    Route::post('/task/update',[TaskController::class, 'update'])->name('tasks.update');
});




//ROTAS DO LOGIN
Route::get('/login',[AuthController::class, 'index'])->name('login');
Route::post('/login/',[AuthController::class, 'login_action'])->name('users.login_action');
Route::get('/register',[AuthController::class, 'register'])->name('register');
Route::post('/register',[AuthController::class, 'register_action'])->name('users.register_action');


