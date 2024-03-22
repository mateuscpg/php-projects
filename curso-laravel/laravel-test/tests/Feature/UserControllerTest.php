<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Testing\Fluent\AssertableJson;
use Tests\TestCase;

class UserControllerTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function test_getUsers(): void
    {
        $response = $this->get('/users');

        $response->assertStatus(200);
        $response->assertJsonStructure([
                '*' => [
                    'id',
                    'name',
                    'email'
                ],
            ]);
        $response->assertSee('email');
        $response->assertJsonFragment(['email' => 'superadmin@gmail.com']); // Verifica se tem um valor 'superadmin@gmail.com' na chave de 'email'

        $users = $response->json();
        $this->assertEquals('Barney Reilly DVM', end($users)['name']);  // Verifica se o último registro do response tem o valor 'name' igual a 'Barney Reilly DVM'

        $this->assertEquals(null, end($users)['nextId']); // Verifica se não tem próximo id se chegar no último registro do response.

    }
    public function test_getUser() : void
    {
        $id = 1;
        $response = $this->get('/user/'. $id);
        $response->assertStatus(200);
        $response->assertJsonFragment([
            'name' => 'Super',
        ]);
    }
}
