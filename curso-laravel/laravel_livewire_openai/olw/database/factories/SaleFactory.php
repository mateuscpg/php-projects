<?php

namespace Database\Factories;

use App\Enums\Status;
use App\Models\Client;
use App\Models\Seller;
use Illuminate\Database\Eloquent\Factories\Factory;

class SaleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'seller_id' => Seller::factory(),
            'client_id' => Client::factory(),
            'sold_at' => $this->faker->dateTimeBetween('-8 years', '-1 year'),
            'total_amount' => $this->faker->numberBetween(10000, 50000),
            'status' => $this->faker->randomElement([Status::APPROVED, Status::PENDING, Status::CANCELED]),
        ];
    }
}
