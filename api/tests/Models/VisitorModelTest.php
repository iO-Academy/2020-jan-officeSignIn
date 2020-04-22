<?php

namespace Tests\Models;

use PHPUnit\Framework\TestCase;
use SignInApp\Models\VisitorModel;

class VisitorModelTest extends TestCase
{
    /**
     * testing success of construct in Visitor Model
     * making sure it has the DB connection
     */
    public function testSuccessConstruct()
    {
        $db = $this->createMock(\PDO::class);
        $case = new VisitorModel($db);
        $expected = VisitorModel::class;
        $this->assertInstanceOf($expected, $case);
    }
}