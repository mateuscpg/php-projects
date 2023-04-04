<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class CreateUserAndAddressSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name'=> 'Mateus Correia',
            'email'=> 'mateus@gmail.com',
            'password'=> Hash::make('123456789')
        ]);
        DB::table('addresses')->insert([
            'address'=> 'Rua dos bobos, Nº0'
        ]);
    }
}
