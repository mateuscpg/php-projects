<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/users', [UserController::class, 'getUsers']);
Route::get('/user/{id}', [UserController::class, 'getUser']);

Route::get('/posts', [PostController::class, 'getPosts']);
Route::get('/post/{id}', [PostController::class, 'getPost']);
Route::get('/posts-by-user', [PostController::class, 'getPostsByUser']);
