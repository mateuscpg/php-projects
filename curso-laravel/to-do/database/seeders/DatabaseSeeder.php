<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Category;
use App\Models\Task;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
//        $this->call([
//            UserSeeder::class,
//            TaskSeeder::class
//        ]);
        User::factory(10)->create();

        Category::insert([[
            'title' => 'Alta Prioridade',
            'color' => 'Red',
            'user_id' => User::all()->random()->id
        ],[
            'title' => 'Média Prioridade',
            'color' => 'Yellow',
            'user_id' => User::all()->random()->id
        ],[
            'title' => 'Baixa Prioridade',
            'color' => 'Blue',
            'user_id' => User::all()->random()->id
        ]]);

        Task::factory(100)->create();
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
