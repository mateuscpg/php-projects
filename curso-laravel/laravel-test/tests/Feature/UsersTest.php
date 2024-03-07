<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Testing\Fluent\AssertableJson;
use Tests\TestCase;

class UsersUnitTest extends TestCase
{
    use WithFaker;
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_get_all_users()
    {
        $response = $this->getJson('/get-users');

        $response->assertStatus(200);
        
        $response
        ->assertJson(function(AssertableJson $json) {
        //     $json->has(2)
        //     ->first(fn (AssertableJson $json) =>
        //         $json->where('id', 2)->missing('message')->etc()  // etc() afirma para o teste que pode ter mais atributos no response, sem ele, o teste falhará.
        // );
            $json->hasAll(['0.id', '0.email']);
        });
    }

    public function test_find_user()
    {
        $id = 2;
        $response = $this->get("/get-user/$id");

        //$response->assertStatus(200);
        $response->assertSuccessful();
        //$response->assertOk();                                     // Afirme que a resposta tem um código de status HTTP 200.
        //$response->assertSee('email');                             // string fornecida está no response.
        //$response->assertSeeText('Correia');                       // string fornecida está em algum texto de algum atributo do response.
        //$response->assertDontSee('emaail');                        // string fornecida não está no response.
        //$response->assertDontSeeText('Mateusssss');                // string fornecida não está em nenhum texto de nenhum atributo do response.
        //$response->assertJsonPath('user.name', 'Mateus Correia');  // verifica se o valor da chave fornecida está no response mesmo.
        //$response->assertSeeInOrder(['name', 'email']);            // verifica se as strings fornecidas no array estão contidas em ordem no response.

        $response->assertJsonStructure([
            'user' => [
                'name',
                'email',
            ]
        ]);


        $response->assertJson(function (AssertableJson $json){
            $json->has('user.email');
        });
    }

    public function test_create_user()
    {
        $userData = [
            'name' => $this->faker->name(),
            'email' => $this->faker->email(),
            'password' => $this->faker->password(),
        ];

        $response = $this->post('/create-user', $userData);

        $response->assertStatus(200);
        
    }
}
