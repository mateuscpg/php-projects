<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StreamingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('streaming')
        ->insertGetId([
            'name' => 'Netflix',
            'icon' => 'https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456'
        ]);
        DB::table('streaming')
        ->insertGetId([
            'name' => 'HBO',
            'icon' => 'https://hbomax-images.warnermediacdn.com/2020-05/square%20social%20logo%20400%20x%20400_0.png'
        ]);
        DB::table('streaming')
        ->insertGetId([
            'name' => 'Prime Video',
            'icon' => 'https://cdn.windowsreport.com/wp-content/uploads/sites/3/2021/01/Amazon-Prime-a-bloque-le-VPN_Voici-ce-qui-marche-encore.jpg'
        ]);
        DB::table('streaming')
        ->insertGetId([
            'name' => 'Paramount',
            'icon' => 'https://c.clc2l.com/t/p/a/paramount-ZPsCyQ.png'
        ]);
        DB::table('streaming')
        ->insertGetId([
            'name' => 'Star +',
            'icon' => 'https://play-lh.googleusercontent.com/aZLb5JKvnzXBAcaU2M9fsgp0vfYBfsXQu_yHaehDzqMDqxCXixVPOdY3y1kWVfJfSBew=w240-h480-rw'
        ]);
    }
}
