<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Streaming extends Model
{
    use HasFactory;
    protected $table= 'streaming';
    protected $fillable = ['id', 'name', 'icon','created_at', 'updated_at'];

    public function movies(){
        return $this->belongsToMany(Movie::class, 'movie_streaming', 'id_streaming', 'id_movie');
    }
}
