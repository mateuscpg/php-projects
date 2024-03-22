<?php

namespace App\Http\Controllers;

use App\Models\Post;

class PostController extends Controller
{
    public function getPosts()
    {
        return Post::all();
    }

    public function getPost($id)
    {
        return Post::findOrFail($id);
    }

    public function getPostsByUser()
    {
        return Post::with(['user'])->get();
    }
    
}
