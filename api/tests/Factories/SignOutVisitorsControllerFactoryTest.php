<?php

namespace Test\Factories;

use PHPUnit\Framework\TestCase;
use SignInApp\Factories\SignOutVisitorsControllerFactory;
use SignInApp\Controllers\SignOutVisitorsController;
use SignInApp\Models\VisitorModel;
use Psr\Container\ContainerInterface;

class SignOutVisitorsControllerFactoryTest extends TestCase
{
    /**
     * checks to make sure factory class instantiated when calling new factory
     */
    public function testInstantiation()
    {
        $factory = new SignOutVisitorsControllerFactory();
        $expected = SignOutVisitorsControllerFactory::class;
        $this->assertInstanceOf($expected, $factory);
    }

    /**
     * Tests the invoke magic method, asserting that a SignOutVisitorController object is instantiated.
     */
    public function testInvoke()
    {
        $container = $this->createMock(ContainerInterface::class);
        $visitorModel = $this->createMock(VisitorModel::class);
        $container->method('get')->willReturn($visitorModel);

        $factory = new SignOutVisitorsControllerFactory();
        $case = $factory($container);
        $expected = SignOutVisitorsController::class;
        $this->assertInstanceOf($expected, $case);
    }
}