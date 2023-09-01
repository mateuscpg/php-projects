<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use App\Models\Streaming;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use function PHPUnit\Framework\isEmpty;

class MovieController extends Controller
{       
        private function filterMovie($query, $request){
                if(isset($request['movie'])){
                        $query->where('title', 'like', '%' . $request['movie'] . '%');
                }
        }

        public function searchMovie(Request $request)
        {
                $movie = DB::table('movies')
                ->join('streaming', 'movies.id_streaming', '=', 'streaming.id')
                ->where(function ($query) use ($request){
                        $this->filterMovie($query, $request);
                })
                ->select('movies.id','movies.title', 'movies.description','movies.video', 'streaming.icon as streaming_logo')
                ->get();

                return response()->json(['movie'=>$movie, 'success'=>true]);

        }


        public function getMovie(Request $request){
                try{
                        $movie = Movie::select('*')-> where('id',$request['id_movie'])->first();
                        return response()->json(['movie'=>$movie]);
                }
                catch(Exception $error){
                        return $error->getTrace();
                }

        }

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
                ->select('movies.id','movies.title', 'movies.description', 'movies.image', 
                         'movies.video', 'movies.category', 'movies.id_streaming', 'streaming.icon as streaming_logo')
                ->get();

                return $movies;
        }

        public function getAcctionMovies(){
                $movies = DB::table('movies')
                ->join('streaming', 'movies.id_streaming', '=', 'streaming.id')
                ->where('category', 'acctionMovies' )
                ->select('movies.title', 'movies.description', 'movies.image', 
                         'movies.video', 'movies.category', 'movies.id_streaming', 'streaming.icon as streaming_logo')
                ->get();

                return $movies;
        }

        public function getAdventureMovies(){
                $movies = DB::table('movies')
                ->join('streaming', 'movies.id_streaming', '=', 'streaming.id')
                ->where('category', 'adventureMovies' )
                ->select('movies.title', 'movies.description', 'movies.image', 
                         'movies.video', 'movies.category', 'movies.id_streaming', 'streaming.icon as streaming_logo')
                ->get();

                return $movies;
        }

        public function getTerrorMovies(){
                $movies = DB::table('movies')
                ->join('streaming', 'movies.id_streaming', '=', 'streaming.id')
                ->where('category', 'terrorMovies' )
                ->select('movies.title', 'movies.description', 'movies.image', 
                         'movies.video', 'movies.category', 'movies.id_streaming', 'streaming.icon as streaming_logo')
                ->get();

                return $movies;
        }

        public function getRomanceMovies(){
                $movies = DB::table('movies')
                ->join('streaming', 'movies.id_streaming', '=', 'streaming.id')
                ->where('category', 'romanceMovies' )
                ->select('movies.title', 'movies.description', 'movies.image', 
                         'movies.video', 'movies.category', 'movies.id_streaming', 'streaming.icon as streaming_logo')
                ->get();

                return $movies;        
        }

        public function getDramaMovies(){
                $movies = DB::table('movies')
                ->join('streaming', 'movies.id_streaming', '=', 'streaming.id')
                ->where('category', 'dramaMovies' )
                ->select('movies.title', 'movies.description', 'movies.image', 
                         'movies.video', 'movies.category', 'movies.id_streaming', 'streaming.icon as streaming_logo')
                ->get();

                return $movies;
        }

        public function getComedyMovies(){
                $movies = DB::table('movies')
                ->join('streaming', 'movies.id_streaming', '=', 'streaming.id')
                ->where('category', 'comedyMovies' )
                ->select('movies.title', 'movies.description', 'movies.image', 
                         'movies.video', 'movies.category', 'movies.id_streaming', 'streaming.icon as streaming_logo')
                ->get();

                return $movies;
        }

        public function getDocumentaryMovies(){
                $movies = DB::table('movies')
                ->join('streaming', 'movies.id_streaming', '=', 'streaming.id')
                ->where('category', 'documentaryMovies' )
                ->select('movies.title', 'movies.description', 'movies.image', 
                         'movies.video', 'movies.category', 'movies.id_streaming', 'streaming.icon as streaming_logo')
                ->get();
                
                return $movies;
        }

        public function getSuspenseMovies(){
                $movies = DB::table('movies')
                ->join('streaming', 'movies.id_streaming', '=', 'streaming.id')
                ->where('category', 'suspenseMovies' )
                ->select('movies.title', 'movies.description', 'movies.image', 
                         'movies.video', 'movies.category', 'movies.id_streaming', 'streaming.icon as streaming_logo')
                ->get();

                return $movies;
        }

        public function getScienceFictionMovies(){
                $movies = DB::table('movies')
                ->join('streaming', 'movies.id_streaming', '=', 'streaming.id')
                ->where('category', 'scienceFictionMovies' )
                ->select('movies.title', 'movies.description', 'movies.image', 
                         'movies.video', 'movies.category', 'movies.id_streaming', 'streaming.icon as streaming_logo')
                ->get();

                return $movies;
        }

        public function getMusicalMovies(){
                $movies = DB::table('movies')
                ->join('streaming', 'movies.id_streaming', '=', 'streaming.id')
                ->where('category', 'musicalMovies' )
                ->select('movies.title', 'movies.description', 'movies.image', 
                         'movies.video', 'movies.category', 'movies.id_streaming', 'streaming.icon as streaming_logo')
                ->get();

                return $movies;        
        }
    
}
