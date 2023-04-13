<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class State extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'slug'];
    public $timestamps = false;

    //Um estado tem muitos anúncios
    public function advertises()
    {
        return $this->hasMany(Advertise::class);
    }

    //Um estado tem muitos usuários
    public function users(){
        return $this->hasMany(User::class);
    }
}
