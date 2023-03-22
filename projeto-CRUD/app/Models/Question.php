<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;
    protected $fillable=['enunciado', 'alternativa_a', 'alternativa_b', 'alternativa_c', 'alternativa_d','alternativa_e'];
    protected $table ='questoes';

    public function answer()
    {
        return $this->hasMany(Answer::class,'questao_id');
    }

}
