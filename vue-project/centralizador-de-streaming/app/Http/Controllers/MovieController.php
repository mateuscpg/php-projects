<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use App\Models\Streaming;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class MovieController extends Controller
{       
        public function getStreaming(){
                $streaming = Streaming::all();
                return $streaming;
        }

        public function getPrincipalMovies(){
                $movies = Movie::all()->where('category', 'principalMovies' );
                return $movies;         
        }

        public function getRecommendedMovies()
        {
                $movies = DB::table('movies')
                ->join('streaming', 'movies.id_streaming', '=', 'streaming.id')
                ->where('movies.category', 'recommendedMovies')
                ->select('movies.title', 'movies.description', 'movies.image', 
                         'movies.video', 'movies.category', 'movies.id_streaming', 'streaming.icon as streaming_logo')
                ->get();

                return $movies;
        }

        // public function getRecommendedMovies(){
        //         $movies = Movie::all()->where('category', 'recommendedMovies' );

        //         foreach($movies as $movie){
        //                 $movie->streaming()->select('icon as streaming_logo')->first();
        //         }
        //         return $movies;       
        // }

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
