<?php

namespace Test\Factories;

use PHPUnit\Framework\TestCase;
use SignInApp\Factories\GetAllSignedOutVisitorsControllerFactory;
use SignInApp\Controllers\GetAllSignedOutVisitorsController;
use SignInApp\Models\VisitorModel;
use Psr\Container\ContainerInterface;

class GetAllSignedOutVisitorsControllerFactoryTest extends TestCase
{
    /**
     * checks to make sure factory class instantiated when calling new factory
     */
    public function testInstantiation()
    {
        $factory = new GetAllSignedOutVisitorsControllerFactory();
        $expected = GetAllSignedOutVisitorsControllerFactory::class;
        $this->assertInstanceOf($expected, $factory);
    }

    /**
     * tests the invoke method asserting that a GetAllSignedOutVisitorsController object is instantiated
     */
    public function testInvoke()
    {
        $container = $this->createMock(ContainerInterface::class);
        $visitorModel = $this->createMock(VisitorModel::class);
        $container->method('get')->willReturn($visitorModel);

        $factory = new GetAllSignedOutVisitorsControllerFactory();
        $case = $factory($container);
        $expected = GetAllSignedOutVisitorsController::class;
        $this->assertInstanceOf($expected, $case);
    }
}