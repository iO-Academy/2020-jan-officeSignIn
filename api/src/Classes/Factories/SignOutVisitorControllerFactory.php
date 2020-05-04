<?php

namespace SignInApp\Factories;

use Psr\Container\ContainerInterface;
use SignInApp\Controllers\SignOutVisitorController;

class SignOutVisitorControllerFactory
{
    /**
     * Instantiates a new SignOutVisitorController with a VisitorModel injected as a dependency
     *
     * @param ContainerInterface $container
     * @return SignOutVisitorController
     */
    public function __invoke(ContainerInterface $container)
    {
        $visitorModel = $container->get('VisitorModel');
        return new SignOutVisitorController($visitorModel);
    }
}
