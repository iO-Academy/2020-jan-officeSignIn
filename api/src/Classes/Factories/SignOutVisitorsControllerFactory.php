<?php

namespace SignInApp\Factories;

use Psr\Container\ContainerInterface;
use SignInApp\Controllers\SignOutVisitorsController;

class SignOutVisitorsControllerFactory
{
    /**
     * Instantiates a new SignOutVisitorsController with a VisitorModel injected as a dependency
     *
     * @param ContainerInterface $container
     * @return SignOutVisitorsController
     */
    public function __invoke(ContainerInterface $container)
    {
        $visitorModel = $container->get('VisitorModel');
        return new SignOutVisitorsController($visitorModel);
    }
}