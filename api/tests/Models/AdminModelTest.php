<?php

namespace Tests\Models;

use PHPUnit\Framework\TestCase;
use SignInApp\Models\AdminModel;

class AdminModelTest extends TestCase
{
    /**
     * testing success of construct in Admin Model
     * making sure it has the DB connection
     */
    public function testSuccessConstruct()
    {
        $db = $this->createMock(\PDO::class);
        $case = new AdminModel($db);
        $expected = AdminModel::class;
        $this->assertInstanceOf($expected, $case);
    }
}