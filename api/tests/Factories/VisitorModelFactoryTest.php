<?php

namespace Test\Factories;

use PHPUnit\Framework\TestCase;
use SignInApp\Factories\VisitorModelFactory;
use Psr\Container\ContainerInterface;
use SignInApp\Models\VisitorModel;

class VisitorModelFactoryTest extends TestCase
{
    /**
     * checks to make sure factory class instantiated when calling new factory
     */
    public function testInstantiation()
    {
        $factory = new VisitorModelFactory();
        $expected = VisitorModelFactory::class;
        $this->assertInstanceOf($expected, $factory);
    }

    /**
     * Tests the invoke magic method, asserting that a GetAllSignedInVisitorsController object is instantiated.
     */
    public function testInvoke()
    {
        $container = $this->createMock(ContainerInterface::class);
        $db = $this->createMock(\PDO::class);
        $container->method('get')
            ->willReturn($db);

        $factory = new VisitorModelFactory();
        $case = $factory($container);
        $expected = VisitorModel::class;
        $this->assertInstanceOf($expected, $case);
    }
}
