<?php

use App\Http\Controllers\AddressController;
use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

//-------USUÁRIO-------

//Lista os usuários cadastrados all()
Route::get('/users',[UserController::class, 'index']);
//Buscar apenas um único usuário pelo Id
Route::get('/users/{id}',[UserController::class, 'findOne']);
//Criar um usuário
Route::post('/users',[UserController::class, 'create']);
//Deletar um usuário
Route::delete('/users/{id}', [UserController::class, 'delete']);

//-------ENDEREÇOS-------
//Listar os endereços cadastrados all()
Route::get('/addresses',[AddressController::class, 'index']);
//Buscar apenas um único endereço pelo Id
Route::get('/addresses/{id}',[AddressController::class, 'findOne']);
//Criar um endereço
Route::post('/addresses',[AddressController::class, 'create']);
//Deletar um endereço
Route::delete('/addresses/{id}', [AddressController::class, 'delete']);

//-------PEDIDOS-------
//Lista todos os pedidos
Route::get('/invoice',[InvoiceController::class, 'index']);
//Busca apenas um pedido
Route::get('/invoice/{id}',[InvoiceController::class,'findOne']);
//Cria um pedido
Route::post('/invoice',[InvoiceController::class, 'create']);
//Deleta um pedido
Route::delete('/invoice/{id}',[InvoiceController::class, 'delete']);
