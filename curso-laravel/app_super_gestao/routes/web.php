<?php

use App\Http\Controllers\ContatosController;
use App\Http\Controllers\FornecedorController;
use App\Http\Controllers\PrincipalController;
use App\Http\Controllers\SobreNosController;
use App\Http\Controllers\TesteController;
use Illuminate\Support\Facades\Route;


//Rotas principais
Route::get('/',[PrincipalController::class, 'principal'])->name('site.index');
Route::get('/sobre-nos',[SobreNosController::class, 'sobreNos'])->name('site.sobrenos'); 
Route::get('/contatos',[ContatosController::class, 'contatos'])->name('site.contato'); 
Route::get('/login', function(){ return 'Login';})->name('site.login');

//Prefixo para rotas
Route::prefix('/app')->group(function(){
    Route::get('/clientes', function(){ return 'Clientes';})->name('app.clientes');
    Route::get('/fornecedores',[FornecedorController::class, 'index'])->name('app.fornecedores');
    Route::get('/produtos', function(){ return 'Produtos';})->name('app.produtos');
});

Route::get('/teste/{p1}/{p2}', [TesteController::class, 'teste'])->name('teste');


//Rota de FallBack - Mostra algo quando uma rota acessada não existir
Route::fallback(function(){
    echo '<h2 style = "text-align:center">
    A rota acessada não existe,<a href="/"> clique aqui </a> para ir para a página inicial 
        </h2>';
});


