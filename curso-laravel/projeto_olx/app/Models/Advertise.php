<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Advertise extends Model
{
    use HasFactory;

    protected $fillable = ['title','price','isNegotiable','description','description','user_id','category_id'];

    //O Anúncio pertence à uma categoria     
    public function category()
    {
        return $this-> belongTo(Category::class);
    }

    public function state(){
        return $this->belongsTo(State::class);
    }

    //Um anúncio pertence à um usuário
    public function user(){
        return $this->belongsTo(User::class);
    }
    
}
