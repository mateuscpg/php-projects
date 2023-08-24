<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableMovies extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if(!Schema::hasTable('movies')){
            Schema::create('movies', function (Blueprint $table) {
                $table->id();
                $table->string('title');
                $table->longText('description');
                $table->string('image');
                $table->string('video');
                $table->enum('category',['principalMovies', 'recommendedMovies', 'acctionMovies','adventureMovies',
                 'terrorMovies', 'romanceMovies', 'comedyMovies', 'dramaMovies', 'documentaryMovies', 
                 'suspenseMovies', 'scienceFictionMovies', 'musicalMovies']);
                $table->integer('id_streaming');
                $table->timestamps();
            });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('movies');
    }
}
