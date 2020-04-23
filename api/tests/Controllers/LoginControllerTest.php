<?php

namespace Tests\Controllers;

use PHPUnit\Framework\TestCase;
use SignInApp\Models\AdminModel;
use SignInApp\Controllers\LoginController;

class LoginControllerTest extends TestCase
{
    /**
     *  makes sure controller is instantiated with access to VisitorModel
     */
    public function testSuccessConstruct()
    {
        $adminModel = $this->createMock(AdminModel::class);
        $key = 'some_key';
        $case = new LoginController($adminModel,$key);
        $expected = LoginController::class;
        $this->assertInstanceOf($expected, $case);
    }
}
