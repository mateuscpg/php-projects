<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MovieStreaming extends Model
{
    use HasFactory;
    protected $table = 'movie_streaming';
    protected $fillable = ['id_movie', 'id_streaming','created_at', 'updated_at'];
}
