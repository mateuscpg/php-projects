<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Fornecedor;
use Illuminate\Support\Facades\DB;

class FornecedorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //Instanciando um objeto
        $fornecedor = new Fornecedor();
        $fornecedor->nome= 'Fornecedor 1';
        $fornecedor->site='fornecedor1.com.br';
        $fornecedor->uf='JP';
        $fornecedor->email='contato@fornecedor1.com.br';
        $fornecedor->save();

        //Utilizando o método create
        Fornecedor::create([
            'nome'=> 'fornecedor 2',
            'site'=> 'fornecedor2.com.br',
            'uf'=> 'SP',
            'email'=> 'contato@fornecedor2.com.br'
        ]);

        //Utilizando Insert
        DB::table('fornecedores')->insert([
            'nome'=> 'fornecedor 3',
            'site'=> 'fornecedor3.com.br',
            'uf'=> 'MG',
            'email'=> 'contato@fornecedor3.com.br'
        ]);


    }
}
