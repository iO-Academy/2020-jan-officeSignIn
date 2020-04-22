<?php

namespace Tests\Controllers;

use PHPUnit\Framework\TestCase;
use SignInApp\Models\VisitorModel;
use SignInApp\Controllers\GetAllSignedInVisitorsController;

class GetAllSignedInVisitorsControllerTest extends TestCase
{
    /**
     *  makes sure controller is instantiated with access to VisitorModel
     */
    public function testSuccessConstruct()
    {
        $visitorModel = $this->createMock(VisitorModel::class);
        $case = new GetAllSignedInVisitorsController($visitorModel);
        $expected = GetAllSignedInVisitorsController::class;
        $this->assertInstanceOf($expected, $case);
    }
}
