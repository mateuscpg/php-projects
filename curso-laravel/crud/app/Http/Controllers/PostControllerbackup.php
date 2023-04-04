<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostControllerbackup extends Controller
{
    public function create(Request $request)
    {
        $new_post =[
            'title' => 'Meu terceiro post',
            'content' => 'Conteúdo qualquer',
            'author' => 'Mateus'
        ];

        $post = new Post($new_post);
        $post -> save();

        dd($post);
    }

    public function read(Request $request)
    {
        $post = new Post();

        $post = $post->find(1);

        return $post;
    }

    public function all(Request $request)
    {
       $posts = Post::all();
       return $posts;

    }

    public function update(Request $request)
    {
        $posts = Post::where('id', '=',1)->update([
            'author' => 'Zete',
            'title' => 'Alterado'
        ]);
        return $posts= Post::all();
    }

    public function delete(Request $request)
    {
        $post = Post::find(1);
        if ($post){
            return $post->delete();
        }else{
            return 'Esse ID é inexistente';
        }

    }
}
