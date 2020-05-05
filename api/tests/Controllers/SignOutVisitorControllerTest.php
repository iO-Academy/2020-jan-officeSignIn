<?php

namespace Tests\Controllers;

use PHPUnit\Framework\TestCase;
use SignInApp\Models\VisitorModel;
use SignInApp\Controllers\SignOutVisitorController;

class SignOutVisitorControllerTest extends TestCase
{
    /**
     *  makes sure controller is instantiated with access to VisitorModel
     */
    public function testSuccessConstruct()
    {
        $visitorModel = $this->createMock(VisitorModel::class);
        $case = new SignOutVisitorController($visitorModel);
        $expected = SignOutVisitorController::class;
        $this->assertInstanceOf($expected, $case);
    }
}
