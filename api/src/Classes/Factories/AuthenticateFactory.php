<?php

namespace SignInApp\Factories;

use SignInApp\Authenticate\Authenticate;
use Psr\Container\ContainerInterface;


class AuthenticateFactory
{
    /**
     * when invoked, instantiates an Authenticate
     *
     * @param ContainerInterface $container
     *
     * @return Authenticate - the instantiated controller
     */
    public function __invoke(ContainerInterface $container) : Authenticate
    {
        $jwtKey = $container->get('jwtKey');
        return new Authenticate($jwtKey);
    }
}
