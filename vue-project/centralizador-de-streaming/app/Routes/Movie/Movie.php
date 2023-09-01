<?php

namespace app\Routes\Movie;

use App\Http\Controllers\MovieController;
use Illuminate\Support\Facades\Route;

class Movie
{
    public static function movie($middlware = [], $prefix = '/movies')
    {
        return Route::group(['middleware' => $middlware, 'prefix' => $prefix],function () {
            Route::get('/search-movie', [MovieController::class, 'searchMovie']);
            Route::get('/get-movie', [MovieController::class, 'getMovie']);
            Route::get('/get-principal-movie', [MovieController::class, 'getPrincipalMovies']);
            Route::get('/get-recommended-movie', [MovieController::class, 'getRecommendedMovies']);
            Route::get('/get-acction-movie', [MovieController::class, 'getRecommendedMovies']);
            Route::get('/get-adventure-movie', [MovieController::class, 'getRecommendedMovies']);
            Route::get('/get-terror-movie', [MovieController::class, 'getRecommendedMovies']);
            Route::get('/get-romance-movie', [MovieController::class, 'getRecommendedMovies']);
            Route::get('/get-drama-movie', [MovieController::class, 'getRecommendedMovies']);
            Route::get('/get-comedy-movie', [MovieController::class, 'getRecommendedMovies']);
            Route::get('/get-documentary-movie', [MovieController::class, 'getRecommendedMovies']);
            Route::get('/get-suspense-movie', [MovieController::class, 'getRecommendedMovies']);
            Route::get('/get-science-fiction-movie', [MovieController::class, 'getRecommendedMovies']);
            Route::get('/get-musical-movie', [MovieController::class, 'getRecommendedMovies']);
        });
    }
}