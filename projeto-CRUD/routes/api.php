<?php

use App\Http\Controllers\AnswerController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/usuario', [UserController::class, 'index']);
Route::post('/usuario', [UserController::class, 'create']);
Route::delete('/usuario/{id}', [UserController::class, 'delete']);
Route::post('/usuario-update/{id}', [UserController::class, 'update']);

Route::get('/questao', [QuestionController::class, 'index']);
Route::post('/questao', [QuestionController::class, 'create']);
Route::delete('/questao/{id}', [QuestionController::class, 'delete']);
Route::post('/questao-update/{id}', [QuestionController::class, 'update']);

Route::get('resposta', [AnswerController::class, 'index']);
Route::post('resposta', [AnswerController::class, 'create']);
Route::delete('resposta/{id}', [AnswerController::class, 'delete']);
Route::post('resposta-update', [AnswerController::class, 'update']);


