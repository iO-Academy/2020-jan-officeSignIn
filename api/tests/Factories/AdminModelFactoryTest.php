<?php


namespace Test\Factories;

use PHPUnit\Framework\TestCase;
use SignInApp\Factories\AdminModelFactory;

class AdminModelFactoryTest extends TestCase
{
    /**
     * checks to make sure factory class instantiated when calling new factory
     */
    public function testSuccessInvoke()
    {
        $factory = new AdminModelFactory();
        $expected = AdminModelFactory::class;
        $this->assertInstanceOf($expected, $factory);
    }
}
