<?php

namespace Tests\Controllers;

use PHPUnit\Framework\TestCase;
use SignInApp\Models\VisitorModel;
use SignInApp\Controllers\GetAllSignedOutVisitorsController;

class GetAllSignedOutVisitorsControllerTest extends TestCase
{
    /**
     * makes sure GetAllSignedOutVisitorsController is instantiated with access to Visitor Model
     */
    public function testSuccessConstruct()
    {
        $visitorModel = $this->createMock(VisitorModel::class);
        $case = new GetAllSignedOutVisitorsController($visitorModel);
        $expected = GetAllSignedOutVisitorsController::class;
        $this->assertInstanceOf($expected, $case);
    }
}