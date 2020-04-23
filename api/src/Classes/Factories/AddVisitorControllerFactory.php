<?php

namespace SignInApp\Factories;

use Psr\Container\ContainerInterface;
use SignInApp\Controllers\AddVisitorController;

class AddVisitorControllerFactory
{
    /**
     * Instantiates a new AddVisitorController and injects a VisitorModel
     *
     * @param ContainerInterface $container
     * @return AddVisitorController
     */
    public function __invoke(ContainerInterface $container)
    {
        $visitorModel = $container->get('VisitorModel');
        return new AddVisitorController($visitorModel);
    }
}
