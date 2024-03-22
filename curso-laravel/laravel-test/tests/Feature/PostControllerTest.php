<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class PostControllerTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function test_getPostsByUser(): void
    {
        $response = $this->get('/posts');
        $response->assertStatus(200);

        $postsData = $response->json();

        foreach ($postsData as $postData) {
            $this->assertArrayHasKey('title', $postData,  "Post sem título encontrado.");
        }
        $response = $this->get('/posts-by-user');
        $response->assertStatus(200);

        $posts = $response->json();
        $superUser = false;

        /*  No contexto dos testes, quando você está trabalhando com o método json() de uma resposta HTTP no Laravel, 
         *  ele retorna um array associativo, não um objeto. 
         *  Portanto, você usa ['chave'] para acessar os valores, como em $post['user']['name'].
         */
        foreach ($posts as $post) {
            if ($post['user']['name'] === 'Super') {  // Verifica se há algum post feito por um usuário com nome 'Super
                $superUser = true;
                break;
            }
        }
        $this->assertTrue($superUser, 'Não há posts com o usuário "Super" encontrado.'); //Retorne true ou informe a mensagem do segundo parâmetro

    }
}
