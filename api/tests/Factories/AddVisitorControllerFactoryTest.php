<?php

namespace Test\Factories;

use PHPUnit\Framework\TestCase;
use SignInApp\Factories\AddVisitorControllerFactory;

class AddVisitorControllerFactoryTest extends TestCase
{
    /**
     * checks to make sure factory class instantiated when calling new factory
     */
    public function testInstantiation()
    {
        $factory = new AddVisitorControllerFactory();
        $expected = AddVisitorControllerFactory::class;
        $this->assertInstanceOf($expected, $factory);
    }
}
