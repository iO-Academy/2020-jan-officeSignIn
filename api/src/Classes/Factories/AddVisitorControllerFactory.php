<?php

namespace SignInApp\Factories;

use Psr\Container\ContainerInterface;
use SignInApp\Controllers\AddVisitorController;

class AddVisitorControllerFactory
{
    /**
     * Instantiates a new AddVisitorController and injects a StageModel
     *
     * @param ContainerInterface $container
     * @return AddVisitorController
     */
    public function __invoke(ContainerInterface $container)
    {
        $visitorsModel = $container->get('VisitorModel');
        return new AddVisitorController($visitorsModel);
    }
}