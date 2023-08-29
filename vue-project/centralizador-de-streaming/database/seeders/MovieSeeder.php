<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MovieSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('movies')->truncate();

        DB::table('movies')
        ->insertGetId([
            'title' => 'Game Of Thrones',
            'description' => "A série se passa em um tradicional colégio interno, o St. Benedict's, no qual estudam os mais prósperos e influentes jovens da sociedade americana. O lema da Instituição é “o fim depende do início”. Para ser mais preciso, ela tem como objetivo formar homens de caráter tendo por base a transmissão do saber e do conhecimento dando como exemplo grandes nomes do passado que muito contribuíram para uma verdadeira democracia",
            'image' => 'https://ogimg.infoglobo.com.br/in/23593051-659-3a7/FT1500A/690/header-got.jpg',
            'video' => 'https://resource.flexclip.com/templates/video/720p/epic-fire-effect-movie-trailer.mp4',
            'category' => 'principalMovies',
            'id_streaming' => '1',
            'created_at' => now(),
        ]);
        DB::table('movies')
        ->insertGetId([
            'title' => 'Vingadores Ultimato',
            'description' => "O filme se passa em um tradicional colégio interno, o St. Benedict's, no qual estudam os mais prósperos e influentes jovens da sociedade americana. O lema da Instituição é “o fim depende do início”. Para ser mais preciso, ela tem como objetivo formar homens de caráter tendo por base a transmissão do saber e do conhecimento dando como exemplo grandes nomes do passado que muito contribuíram para uma verdadeira democracia",
            'image' => 'https://www.publicitarioscriativos.com/wp-content/uploads/2019/08/Todos-os-po%CC%82steres-do-Universo-Cinematogra%CC%81fico-Marvel-em-alta-qualidade.png',
            'video' => 'https://resource.flexclip.com/templates/video/720p/epic-fire-effect-movie-trailer.mp4',
            'category' => 'principalMovies',
            'id_streaming' => '1',
            'created_at' => now(),
        ]);
        DB::table('movies')
        ->insertGetId([
            'title' => 'Avatar 2',
            'description' => "O filme se passa em um tradicional colégio interno, o St. Benedict's, no qual estudam os mais prósperos e influentes jovens da sociedade americana. O lema da Instituição é “o fim depende do início”. Para ser mais preciso, ela tem como objetivo formar homens de caráter tendo por base a transmissão do saber e do conhecimento dando como exemplo grandes nomes do passado que muito contribuíram para uma verdadeira democracia",
            'image' => 'https://cinepop.com.br/wp-content/uploads/2022/11/avatar2_29.jpg',
            'video' => 'https://v4.cdnpk.net/videvo_files/video/free/video0453/large_watermarked/_import_605f65a0c8cfa7.70318750_FPpreview.mp4',
            'category' => 'principalMovies',
            'id_streaming' => '1',
            'created_at' => now(),
        ]);
        DB::table('movies')
        ->insertGetId([
            'title' => 'Deadpool 2',
            'description' => "O filme se passa em um tradicional colégio interno, o St. Benedict's, no qual estudam os mais prósperos e influentes jovens da sociedade americana. O lema da Instituição é “o fim depende do início”. Para ser mais preciso, ela tem como objetivo formar homens de caráter tendo por base a transmissão do saber e do conhecimento dando como exemplo grandes nomes do passado que muito contribuíram para uma verdadeira democracia",
            'image' => 'https://uploads.jovemnerd.com.br/wp-content/uploads/2018/10/deadpool-2-familia.jpg',
            'video' => 'https://v4.cdnpk.net/videvo_files/video/free/video0453/large_watermarked/_import_605f65a0c8cfa7.70318750_FPpreview.mp4',
            'category' => 'principalMovies',
            'id_streaming' => '1',
            'created_at' => now(),
        ]);
        DB::table('movies')
        ->insertGetId([
            'title' => 'Coringa',
            'description' => "O filme se passa em um tradicional colégio interno, o St. Benedict's, no qual estudam os mais prósperos e influentes jovens da sociedade americana. O lema da Instituição é “o fim depende do início”. Para ser mais preciso, ela tem como objetivo formar homens de caráter tendo por base a transmissão do saber e do conhecimento dando como exemplo grandes nomes do passado que muito contribuíram para uma verdadeira democracia",
            'image' => 'https://images.cgames.de/images/gamestar/290/joker_6078890.jpg',
            'video' => 'https://v4.cdnpk.net/videvo_files/video/free/video0453/large_watermarked/_import_605f65a0c8cfa7.70318750_FPpreview.mp4',
            'category' => 'principalMovies',
            'id_streaming' => '1',
            'created_at' => now(),
        ]);




        DB::table('movies')
        ->insertGetId([
            'title' => 'Filme 1',
            'description' => "O filme se passa em um tradicional colégio interno, o St. Benedict's, no qual estudam os mais prósperos e influentes jovens da sociedade americana. O lema da Instituição é “o fim depende do início”. Para ser mais preciso, ela tem como objetivo formar homens de caráter tendo por base a transmissão do saber e do conhecimento dando como exemplo grandes nomes do passado que muito contribuíram para uma verdadeira democracia",
            'image' => 'https://files.tecnoblog.net/wp-content/uploads/2020/12/ordem-filmes-harry-potter-e1609427898909-700x393.jpg',
            'video' => 'https://resource.flexclip.com/templates/video/720p/epic-fire-effect-movie-trailer.mp4',
            'category' => 'recommendedMovies',
            'id_streaming' => '1',
            'created_at' => now(),
        ]);
        DB::table('movies')
        ->insertGetId([
            'title' => 'Filme 2',
            'description' => "O filme se passa em um tradicional colégio interno, o St. Benedict's, no qual estudam os mais prósperos e influentes jovens da sociedade americana. O lema da Instituição é “o fim depende do início”. Para ser mais preciso, ela tem como objetivo formar homens de caráter tendo por base a transmissão do saber e do conhecimento dando como exemplo grandes nomes do passado que muito contribuíram para uma verdadeira democracia",
            'image' => 'https://conteudo.imguol.com.br/c/entretenimento/f1/2021/11/15/o-poster-mostra-peter-parker-e-doutor-estranho-lutando-contra-os-viloes-dos-homem-aranha-antigos-1637010597234_v2_1x1.jpg',
            'video' => 'https://resource.flexclip.com/templates/video/720p/epic-fire-effect-movie-trailer.mp4',
            'category' => 'recommendedMovies',
            'id_streaming' => '1',
            'created_at' => now(),
        ]);
        DB::table('movies')
        ->insertGetId([
            'title' => 'Filme 3',
            'description' => "O filme se passa em um tradicional colégio interno, o St. Benedict's, no qual estudam os mais prósperos e influentes jovens da sociedade americana. O lema da Instituição é “o fim depende do início”. Para ser mais preciso, ela tem como objetivo formar homens de caráter tendo por base a transmissão do saber e do conhecimento dando como exemplo grandes nomes do passado que muito contribuíram para uma verdadeira democracia",
            'image' => 'https://img.olhardigital.com.br/wp-content/uploads/2023/02/o-projeto-adam-divulgacao-netflix-1.png',
            'video' => 'https://resource.flexclip.com/templates/video/720p/epic-fire-effect-movie-trailer.mp4',
            'category' => 'recommendedMovies',
            'id_streaming' => '1',
            'created_at' => now(),
        ]);
        DB::table('movies')
        ->insertGetId([
            'title' => 'Filme 4',
            'description' => "O filme se passa em um tradicional colégio interno, o St. Benedict's, no qual estudam os mais prósperos e influentes jovens da sociedade americana. O lema da Instituição é “o fim depende do início”. Para ser mais preciso, ela tem como objetivo formar homens de caráter tendo por base a transmissão do saber e do conhecimento dando como exemplo grandes nomes do passado que muito contribuíram para uma verdadeira democracia",
            'image' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIEN8hAzw3zJFEfnMlTrborAZon3HXAKHM1Q&usqp=CAU',
            'video' => 'https://resource.flexclip.com/templates/video/720p/epic-fire-effect-movie-trailer.mp4',
            'category' => 'recommendedMovies',
            'id_streaming' => '1',
            'created_at' => now(),
        ]);
        DB::table('movies')
        ->insertGetId([
            'title' => 'Filme 5',
            'description' => "O filme se passa em um tradicional colégio interno, o St. Benedict's, no qual estudam os mais prósperos e influentes jovens da sociedade americana. O lema da Instituição é “o fim depende do início”. Para ser mais preciso, ela tem como objetivo formar homens de caráter tendo por base a transmissão do saber e do conhecimento dando como exemplo grandes nomes do passado que muito contribuíram para uma verdadeira democracia",
            'image' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREtz6-RrA7Xb75mXTBbEIs84VqzXpcMnF6CA&usqp=CAU',
            'video' => 'https://resource.flexclip.com/templates/video/720p/epic-fire-effect-movie-trailer.mp4',
            'category' => 'recommendedMovies',
            'id_streaming' => '1',
            'created_at' => now(),
        ]);
        DB::table('movies')
        ->insertGetId([
            'title' => 'Filme 6',
            'description' => "O filme se passa em um tradicional colégio interno, o St. Benedict's, no qual estudam os mais prósperos e influentes jovens da sociedade americana. O lema da Instituição é “o fim depende do início”. Para ser mais preciso, ela tem como objetivo formar homens de caráter tendo por base a transmissão do saber e do conhecimento dando como exemplo grandes nomes do passado que muito contribuíram para uma verdadeira democracia",
            'image' => 'https://6vezes7.com.br/wp-content/uploads/2023/05/arte-blog-75-1024x576.png',
            'video' => 'https://resource.flexclip.com/templates/video/720p/epic-fire-effect-movie-trailer.mp4',
            'category' => 'recommendedMovies',
            'id_streaming' => '1',
            'created_at' => now(),
        ]);
        DB::table('movies')
        ->insertGetId([
            'title' => 'Filme 7',
            'description' => "O filme se passa em um tradicional colégio interno, o St. Benedict's, no qual estudam os mais prósperos e influentes jovens da sociedade americana. O lema da Instituição é “o fim depende do início”. Para ser mais preciso, ela tem como objetivo formar homens de caráter tendo por base a transmissão do saber e do conhecimento dando como exemplo grandes nomes do passado que muito contribuíram para uma verdadeira democracia",
            'image' => 'https://i.pinimg.com/originals/a0/47/91/a047914690fb35a8ce4f06d743ceb23a.png',
            'video' => 'https://resource.flexclip.com/templates/video/720p/epic-fire-effect-movie-trailer.mp4',
            'category' => 'recommendedMovies',
            'id_streaming' => '1',
            'created_at' => now(),
        ]);
        DB::table('movies')
        ->insertGetId([
            'title' => 'Filme 8',
            'description' => "O filme se passa em um tradicional colégio interno, o St. Benedict's, no qual estudam os mais prósperos e influentes jovens da sociedade americana. O lema da Instituição é “o fim depende do início”. Para ser mais preciso, ela tem como objetivo formar homens de caráter tendo por base a transmissão do saber e do conhecimento dando como exemplo grandes nomes do passado que muito contribuíram para uma verdadeira democracia",
            'image' => 'https://br.web.img3.acsta.net/r_1280_720/newsv7/20/04/22/22/18/1797065.jpg',
            'video' => 'https://resource.flexclip.com/templates/video/720p/epic-fire-effect-movie-trailer.mp4',
            'category' => 'recommendedMovies',
            'id_streaming' => '1',
            'created_at' => now(),
        ]);
        DB::table('movies')
        ->insertGetId([
            'title' => 'Filme 9',
            'description' => "O filme se passa em um tradicional colégio interno, o St. Benedict's, no qual estudam os mais prósperos e influentes jovens da sociedade americana. O lema da Instituição é “o fim depende do início”. Para ser mais preciso, ela tem como objetivo formar homens de caráter tendo por base a transmissão do saber e do conhecimento dando como exemplo grandes nomes do passado que muito contribuíram para uma verdadeira democracia",
            'image' => 'https://uploads.jovemnerd.com.br/wp-content/uploads/2021/02/destruicao-final-amazon.jpg',
            'video' => 'https://resource.flexclip.com/templates/video/720p/epic-fire-effect-movie-trailer.mp4',
            'category' => 'recommendedMovies',
            'id_streaming' => '1',
            'created_at' => now(),
        ]);
        DB::table('movies')
        ->insertGetId([
            'title' => 'Filme 10 ',
            'description' => "O filme se passa em um tradicional colégio interno, o St. Benedict's, no qual estudam os mais prósperos e influentes jovens da sociedade americana. O lema da Instituição é “o fim depende do início”. Para ser mais preciso, ela tem como objetivo formar homens de caráter tendo por base a transmissão do saber e do conhecimento dando como exemplo grandes nomes do passado que muito contribuíram para uma verdadeira democracia",
            'image' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHdAmrUJHKHsdxN0yQazjyv7O0-D-bQy9Jqw&usqp=CAU',
            'video' => 'https://resource.flexclip.com/templates/video/720p/epic-fire-effect-movie-trailer.mp4',
            'category' => 'recommendedMovies',
            'id_streaming' => '1',
            'created_at' => now(),
        ]);


    }
}
