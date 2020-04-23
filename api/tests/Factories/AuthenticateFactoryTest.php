<?php

namespace Test\Factories;

use PHPUnit\Framework\TestCase;
use SignInApp\Authenticate\Authenticate;
use SignInApp\Factories\AuthenticateFactory;
use Psr\Container\ContainerInterface;

class AuthenticateFactoryTest extends TestCase
{
    /**
     * checks to make sure factory class instantiated when calling new factory
     */
    public function testInstantiation()
    {
        $factory = new AuthenticateFactory();
        $expected = AuthenticateFactory::class;
        $this->assertInstanceOf($expected, $factory);
    }

    /**
     * Tests the invoke magic method, asserting that a Authenticate object is instantiated.
     */
    public function testInvoke()
    {
        $container = $this->createMock(ContainerInterface::class);
        $container->method('get')
            ->willReturn('a_key');

        $factory = new AuthenticateFactory();
        $case = $factory($container);
        $expected = Authenticate::class;
        $this->assertInstanceOf($expected, $case);
    }
}
