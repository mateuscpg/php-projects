<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use Illuminate\Http\Request;

class MovieController extends Controller
{
    public function getPrincipalMovies(){
        $movies = Movie::all()->where('category', 'principalMovies' );
        return $movies;         
    }
    
    public function getRecommendedMovies(){
        $movies = Movie::all()->where('category', 'recommendedMovies' );
        return $movies;       
    }
    
    public function getAcctionMovies(){
            $movies = Movie::all()->where('category', 'acctionMovies' );
            return $movies;
    }
    
    public function getAdventureMovies(){
            $movies = Movie::all()->where('category', 'adventureMovies' );
            return $movies;
    }
    
    public function getTerrorMovies(){
            $movies = Movie::all()->where('category', 'terrorMovies' );
            return $movies;
    }
    
    public function getRomanceMovies(){
        $movies = Movie::all()->where('category', 'romanceMovies' );
        return $movies;        
    }
    
    public function getDramaMovies(){
            $movies = Movie::all()->where('category', 'dramaMovies' );
            return $movies;
    }
    
    public function getComedyMovies(){
            $movies = Movie::all()->where('category', 'comedyMovies' );
            return $movies;
    }
    
    public function getDocumentaryMovies(){
            $movies = Movie::all()->where('category', 'documentaryMovies' );
            return $movies;
    }
    
    public function getSuspenseMovies(){
            $movies = Movie::all()->where('category', 'suspenseMovies' );
            return $movies;
    }
    
    public function getScienceFictionMovies(){
            $movies = Movie::all()->where('category', 'scienceFictionMovies' );
            return $movies;
    }
    
    public function getMusicalMovies(){
        $movies = Movie::all()->where('category', 'musicalMovies' );
        return $movies;        
    }
    
}
