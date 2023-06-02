<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    use HasFactory;

    protected $table = 'produtos';
    protected $fillable = ['nome','descricao','peso','unidade_id'];


    public function ProdutoDetalhe(){

        return $this->hasOne(ItemDetalhe::class, 'produto_id', 'id');

    }

    public function Fornecedor(){
        return $this->belongsTo(Fornecedor::class); 
    }
}