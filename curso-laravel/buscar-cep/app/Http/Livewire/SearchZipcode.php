<?php

declare (strict_types=1);
namespace App\Http\Livewire;

use Illuminate\Support\Facades\Http;
use Livewire\Component;

class SearchZipcode extends Component
{
    public $cep = "";
    public $street = "";
    public $neighborhood = "";
    public $city = "";
    public $state = "";

    public function updatedCep (string $value)
    {
        if($value == null){
            $this->street = "";
            $this->neighborhood = "";
            $this->city = "";
            $this->state = "";
        }
        else{
            $response = Http::get("https://viacep.com.br/ws/{$value}/json/")->json();
            $this->street = $response['logradouro'];
            $this->neighborhood = $response['bairro'];
            $this->city = $response['localidade'];
            $this->state = $response['uf'];

        }

    }

    public function render()
    {
        return view('livewire.search-zipcode');
    }
    public function search (string $value)
    {
        return $this->updatedCep($value);
    }
}
