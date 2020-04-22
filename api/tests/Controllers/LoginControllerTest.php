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
        $case = new LoginController($adminModel);
        $expected = LoginController::class;
        $this->assertInstanceOf($expected, $case);
    }
}
