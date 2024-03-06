<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class CompanyFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        //Campos que vão ser preenchidos
        return [
            'commission_rate' => $this->faker->numberBetween(1,6) ,
            'name' => $this->faker->company(),
        ];
    }
}
