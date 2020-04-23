<?php

namespace Test\Factories;

use PHPUnit\Framework\TestCase;
use SignInApp\Factories\LoginControllerFactory;
use SignInApp\Controllers\LoginController;
use SignInApp\Models\AdminModel;
use Psr\Container\ContainerInterface;

class LoginControllerFactoryTest extends TestCase
{
    /**
     * checks to make sure factory class instantiated when calling new factory
     */
    public function testInstantiation()
    {
        $factory = new LoginControllerFactory();
        $expected = LoginControllerFactory::class;
        $this->assertInstanceOf($expected, $factory);
    }

    /**
     * Tests the invoke magic method, asserting that a LoginController object is instantiated.
     */
    public function testInvoke()
    {
        $container = $this->createMock(ContainerInterface::class);
        $adminModel = $this->createMock(AdminModel::class);
        $container
            ->method('get')
            ->withConsecutive($this->equalTo('AdminModel'), $this->equalTo('jwtKey'))
            ->willReturnOnConsecutiveCalls($this->returnValue($adminModel), $this->returnValue('a_key'));

        $factory = new LoginControllerFactory();
        $case = $factory($container);
        $expected = LoginController::class;
        $this->assertInstanceOf($expected, $case);
    }
}
