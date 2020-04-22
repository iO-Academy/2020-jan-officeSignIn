<?php

namespace SignInApp\Controllers;

use SignInApp\Models\AdminModel;
use \Firebase\JWT\JWT;

class LoginController
{
    private $adminModel;
    public function __construct(AdminModel $adminModel)
    {
        $this->adminModel = $adminModel;
    }
}
