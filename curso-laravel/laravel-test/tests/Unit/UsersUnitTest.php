<?php

namespace Tests\Unit;

use App\Http\Controllers\UserController;
use PHPUnit\Framework\TestCase;

class UsersUnitTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function test_add_method_returns_correct_sum()
    {
        $userContoller = new UserController();

        $result = $userContoller->add(3, 5);

        $this->assertEquals(8, $result);
    }

    public function test_add_method_returns_correct_multiple()
    {
        $userContoller = new UserController();

        $result = $userContoller->multiple(2, 5);

        $this->assertEquals(10, $result);

    }
}
