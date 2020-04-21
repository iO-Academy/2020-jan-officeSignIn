<?php

namespace Tests\Controllers;

use PHPUnit\Framework\TestCase;
use SignInApp\Models\VisitorModel;
use SignInApp\Controllers\AddVisitorController;

class AddVisitorControllerTest extends TestCase
{
    /**
     *  makes sure controller is instantiated with access to VisitorModel
     */
    public function testSuccessConstruct()
    {
        $visitorModel = $this->createMock(VisitorModel::class);
        $case = new AddVisitorController($visitorModel);
        $expected = AddVisitorController::class;
        $this->assertInstanceOf($expected, $case);
    }
}
