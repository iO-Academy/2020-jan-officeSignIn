<?php

namespace Test\Factories;

use PHPUnit\Framework\TestCase;
use SignInApp\Models\VisitorModel;
use Psr\Container\ContainerInterface;
use SignInApp\Factories\GetBatchOfSignedOutVisitorsControllerFactory;
use SignInApp\Controllers\GetBatchOfSignedOutVisitorsController;

class GetBatchOfSignedOutVisitorsControllerFactoryTest extends TestCase
{
    /**
     * checks to make sure factory class instantiated when calling new factory
     */
    public function testInstantiation()
    {
        $factory = new GetBatchOfSignedOutVisitorsControllerFactory();
        $expected = GetBatchOfSignedOutVisitorsControllerFactory::class;
        $this->assertInstanceOf($expected, $factory);
    }

    /**
     * tests the invoke method asserting that a GetBatchOfSignedOutVisitorsController object is instantiated
     */
    public function testInvoke()
    {
        $container = $this->createMock(ContainerInterface::class);
        $visitorModel = $this->createMock(VisitorModel::class);
        $container->method('get')->willReturn($visitorModel);

        $factory = new GetBatchOfSignedOutVisitorsControllerFactory();
        $case = $factory($container);
        $expected = GetBatchOfSignedOutVisitorsController::class;
        $this->assertInstanceOf($expected, $case);
    }
}