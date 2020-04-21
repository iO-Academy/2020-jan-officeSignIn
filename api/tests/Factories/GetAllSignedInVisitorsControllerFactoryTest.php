<?php

namespace Test\Factories;

use PHPUnit\Framework\TestCase;
use SignInApp\Factories\GetAllSignedInVisitorsControllerFactory;

class GetAllSignedInVisitorsControllerFactoryTest extends TestCase
{
    /**
     * checks to make sure factory class instantiated when calling new factory
     */
    public function testSuccessInstantiation()
    {
        $factory = new GetAllSignedInVisitorsControllerFactory();
        $expected = GetAllSignedInVisitorsControllerFactory::class;
        $this->assertInstanceOf($expected, $factory);
    }
}
