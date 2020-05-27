<?php

namespace Tests\Controllers;

use PHPUnit\Framework\TestCase;
use SignInApp\Models\VisitorModel;
use SignInApp\Controllers\SignOutVisitorsController;

class SignOutVisitorsControllerTest extends TestCase
{
    /**
     *  makes sure controller is instantiated with access to VisitorModel
     */
    public function testSuccessConstruct()
    {
        $visitorModel = $this->createMock(VisitorModel::class);
        $case = new SignOutVisitorsController($visitorModel);
        $expected = SignOutVisitorsController::class;
        $this->assertInstanceOf($expected, $case);
    }
}
