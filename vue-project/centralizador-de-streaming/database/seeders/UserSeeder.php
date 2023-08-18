<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')
        ->insertGetId([
            'name' => 'Mateus Correia',
            'email' => 'mateus@teste.com',
            'password' => \Illuminate\Support\Facades\Hash::make('123'),
            'photo' => 'https://media.licdn.com/dms/image/D4D03AQHana3NwIBbSA/profile-displayphoto-shrink_800_800/0/1680109933247?e=1697068800&v=beta&t=S_i3fP4fQ_y_GDftV1QDlib_ajtiPoZbmvUY_6Q8w-8',
            'birth' => '08/05/2001',
            'id_netflix' => 0,
            'id_hbo' => 0,
            'id_primevideo' => 0,
            'id_paramount' => 0,
            'id_starplus' => 0,
            'id_cms_privileges' => 1,
            'created_at' => now(),
        ]);
        DB::table('users')
        ->insertGetId([
            'name' => 'Lucas Correia',
            'email' => 'lucas@teste.com',
            'password' => \Illuminate\Support\Facades\Hash::make('123'),
            'photo' => 'https://media.licdn.com/dms/image/C4D03AQElxYx3A84v7w/profile-displayphoto-shrink_800_800/0/1659615831940?e=1697068800&v=beta&t=ePSK2CMfI_rY8JpsLpRCkU_KqGFoA7nBLjrybqHUTaI',
            'birth' => '01/10/1992',
            'id_netflix' => 0,
            'id_hbo' => 0,
            'id_primevideo' => 0,
            'id_paramount' => 0,
            'id_starplus' => 0,
            'id_cms_privileges' => 1,
            'created_at' => now(),
        ]);
    }
}
