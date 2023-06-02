<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class FornecedorFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    private $i = 0;
    public function definition()
    {
        $this->i++;
        return [
            'nome' => "Fornecedor ".$this->i,
            'site' => "fornecedor".$this->i.".com.br",
            'email' => "contato@fornecedor".$this->i.".com.br",
            'uf' => "PB"
        ];
    }
}
