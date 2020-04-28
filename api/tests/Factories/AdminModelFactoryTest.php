<?php


namespace Test\Factories;

use PHPUnit\Framework\TestCase;
use SignInApp\Factories\AdminModelFactory;
use Psr\Container\ContainerInterface;
use SignInApp\Models\AdminModel;

class AdminModelFactoryTest extends TestCase
{
    /**
     * checks to make sure factory class instantiated when calling new factory
     */
    public function testInstantiation()
    {
        $factory = new AdminModelFactory();
        $expected = AdminModelFactory::class;
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

        $factory = new AdminModelFactory();
        $case = $factory($container);
        $expected = AdminModel::class;
        $this->assertInstanceOf($expected, $case);
    }
}
