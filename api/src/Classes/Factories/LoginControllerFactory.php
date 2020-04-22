<?php

namespace SignInApp\Factories;

use SignInApp\Controllers\LoginController;
use Psr\Container\ContainerInterface;


class LoginControllerFactory
{
    /**
     * when invoked, instantiates a LoginController
     *
     * @param ContainerInterface $container
     *
     * @return LoginController - the instantiated controller
     */
    public function __invoke(ContainerInterface $container) : LoginController
    {
        $adminModel = $container->get('AdminModel');
        return new LoginController($adminModel);
    }
}
