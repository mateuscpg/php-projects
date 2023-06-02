<?php

use App\Http\Controllers\ClienteController;
use App\Http\Controllers\ContatoController;
use App\Http\Controllers\FornecedorController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\PedidoController;
use App\Http\Controllers\PedidoProdutoController;
use App\Http\Controllers\PrincipalController;
use App\Http\Controllers\ProdutoController;
use App\Http\Controllers\ProdutoDetalheController;
use App\Http\Controllers\SobreNosController;
use Illuminate\Support\Facades\Route;


//Rotas principais disponíveis
Route::get('/',[PrincipalController::class, 'principal'])->name('site.index')->middleware('log.acesso');
Route::get('/sobre-nos',[SobreNosController::class, 'sobreNos'])->name('site.sobrenos'); 
Route::get('/contato',[ContatoController::class, 'contato'])->name('site.contato'); 
Route::post('/contato',[ContatoController::class, 'salvarcontato'])->name('site.contato'); 
Route::get('/login/{erro?}',[LoginController::class, 'index'])->name('site.login');
Route::post('/login',[LoginController::class, 'autenticar'])->name('site.login');

//Middleware de autenticação + Prefixo para rotas
Route::middleware('autenticacao:padrao, visitante')->prefix('/app')->group(function(){
    // Rotas do adm
    Route::get('/home', [HomeController::class, 'index'])->name('app.home');
    Route::get('/sair', [LoginController::class, 'sair'])->name('app.sair');

    //Rotas para fornecedores
    Route::get('/fornecedor',[FornecedorController::class, 'index'])->name('app.fornecedor');
    Route::post('/fornecedor/listar',[FornecedorController::class, 'listar'])->name('app.fornecedor.listar');
    Route::get('/fornecedor/listar',[FornecedorController::class, 'listar'])->name('app.fornecedor.listar');
    Route::get('/fornecedor/adicionar',[FornecedorController::class, 'adicionar'])->name('app.fornecedor.adicionar');
    Route::post('/fornecedor/adicionar',[FornecedorController::class, 'adicionar'])->name('app.fornecedor.adicionar');
    Route::get('/fornecedor/editar/{id}/{msg?}',[FornecedorController::class, 'editar'])->name('app.fornecedor.editar');
    Route::get('fornecedor/excluir/{id}', [FornecedorController::class, 'excluir'])->name('app.fornecedor.excluir');

    //Produtos
    Route::resource('produto', ProdutoController::class);  

    //Produto detalhe
    Route::resource('produto-detalhe', ProdutoDetalheController::class);

    //Rotas para cliente
    Route::resource('cliente', ClienteController::class);
    //Rotas para pedido
    Route::resource('pedido', PedidoController::class);
    //Rotas para pedido-produto
    // Route::resource('pedido-produto', PedidoProdutoController::class);
    Route::get('pedido-produto/create/{pedido}',[PedidoProdutoController::class, 'create'])->name('pedido-produto.create');
    Route::post('pedido-produto/store/{pedido}',[PedidoProdutoController::class, 'store'])->name('pedido-produto.store');
});


// Route::get('/teste/{p1}/{p2}', [TesteController::class, 'teste'])->name('teste');

//Rota de FallBack - Mostra algo quando uma rota acessada não existir
Route::fallback(function(){
    echo '<h2 
    style = "
    text-align:center;
    color: black;
    background-color: crimson;
    margin-top: 400px;
    margin-left:200px;
    margin-right:200px;
    font-size: 35px;
    font-family: Arial;
    border-radius: 0px 40px 0px 40px;
    "
    >
    A rota acessada não existe, <a href="/">clique aqui </a> para ir para a página inicial.
    
    </h2>';
});


