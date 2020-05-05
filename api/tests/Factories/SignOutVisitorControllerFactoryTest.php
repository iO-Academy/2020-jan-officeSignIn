<?php

namespace Test\Factories;

use PHPUnit\Framework\TestCase;
use SignInApp\Factories\SignOutVisitorControllerFactory;
use SignInApp\Controllers\SignOutVisitorController;
use SignInApp\Models\VisitorModel;
use Psr\Container\ContainerInterface;

class SignOutVisitorControllerFactoryTest extends TestCase
{
    /**
     * checks to make sure factory class instantiated when calling new factory
     */
    public function testInstantiation()
    {
        $factory = new SignOutVisitorControllerFactory();
        $expected = SignOutVisitorControllerFactory::class;
        $this->assertInstanceOf($expected, $factory);
    }

    /**
     * Tests the invoke magic method, asserting that a SignOutVisitorController object is instantiated.
     */
    public function testInvoke()
    {
        $container = $this->createMock(ContainerInterface::class);
        $visitorModel = $this->createMock(VisitorModel::class);
        $container->method('get')
            ->willReturn($visitorModel);

        $factory = new SignOutVisitorControllerFactory();
        $case = $factory($container);
        $expected = SignOutVisitorController::class;
        $this->assertInstanceOf($expected, $case);
    }
}
