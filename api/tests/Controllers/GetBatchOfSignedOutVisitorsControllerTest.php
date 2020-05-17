<?php

namespace Tests\Controllers;

use PHPUnit\Framework\TestCase;
use SignInApp\Models\VisitorModel;
use SignInApp\Controllers\GetBatchOfSignedOutVisitorsController;

class GetBatchOfSignedOutVisitorsControllerTest extends TestCase
{
    /**
     * makes sure GetBatchOfSignedOutVisitorsController is instantiated with access to Visitor Model
     */
    public function testSuccessConstruct()
    {
        $visitorModel = $this->createMock(VisitorModel::class);
        $case = new GetBatchOfSignedOutVisitorsController($visitorModel);
        $expected = GetBatchOfSignedOutVisitorsController::class;
        $this->assertInstanceOf($expected, $case);
    }
}