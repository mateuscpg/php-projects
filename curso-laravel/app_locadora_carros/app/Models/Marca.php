<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Marca extends Model
{
    use HasFactory;
    protected $fillable = ['nome', 'imagem'];

    public function rules(){
        return [
            'nome' => 'required|unique:marcas,nome,'.$this->id.'|min:3',
            'imagem' => 'required|file|mimes:png,jpg,jpeg'
        ];
        /*
        Sobre UNIQUE
        1) Nome da tabela.
        2) Nome da coluna que será pesquisada na tabela.
        3) Id do registro que será desconsiderado na tabela.
        */

    }

    public function feedback(){
        return [
            'required' => 'O campo :attribute é obrigatório',
            'imagem.mimes' => 'O arquivo deve ser uma imagem do tipo PNG, ou JPG, ou JPEG',
            'nome.unique' => 'O nome da marca já existe',
            'nome.min' => 'O campo :attribute exige ter no mínimo 3 caracteres',
            ];
    }

    public function modelos(){
        return $this->hasMany(Modelo::class);  //UMA marca POSSUI VÁRIOS modelos
    }

}
