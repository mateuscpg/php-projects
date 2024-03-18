<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $userCount = User::count();
        return [
            'title' => fake()->sentence(),
            'description' => fake()->text(),
            'user_id' => fake()->numberBetween(1, $userCount),
            'created_at' => now(),
        ];
    }
}
