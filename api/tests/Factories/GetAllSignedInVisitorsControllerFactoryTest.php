<?php

namespace Test\Factories;

use PHPUnit\Framework\TestCase;
use SignInApp\Factories\GetAllSignedInVisitorsControllerFactory;
use SignInApp\Controllers\GetAllSignedInVisitorsController;
use SignInApp\Models\VisitorModel;
use Psr\Container\ContainerInterface;

class GetAllSignedInVisitorsControllerFactoryTest extends TestCase
{
    /**
     * checks to make sure factory class instantiated when calling new factory
     */
    public function testInstantiation()
    {
        $factory = new GetAllSignedInVisitorsControllerFactory();
        $expected = GetAllSignedInVisitorsControllerFactory::class;
        $this->assertInstanceOf($expected, $factory);
    }

    /**
     * Tests the invoke magic method, asserting that a GetAllSignedInVisitorsController object is instantiated.
     */
    public function testInvoke()
    {
        $container = $this->createMock(ContainerInterface::class);
        $visitorModel = $this->createMock(VisitorModel::class);
        $container->method('get')
            ->willReturn($visitorModel);

        $factory = new GetAllSignedInVisitorsControllerFactory();
        $case = $factory($container);
        $expected = GetAllSignedInVisitorsController::class;
        $this->assertInstanceOf($expected, $case);
    }
}
