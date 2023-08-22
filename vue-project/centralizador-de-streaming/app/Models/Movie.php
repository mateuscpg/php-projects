<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{
    use HasFactory;
    protected $table = 'movie';
    protected $fillable = ['name', 'title', 'description', 'image',
     'video', 'category', 'id_streaming','created_at', 'updated_at'];

     public function streamings(){
        return $this->belongsToMany(Streaming::class, 'movies_streaming', 'id_movie', 'id_streaming');
    }
}
