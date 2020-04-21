<?php

namespace SignInApp\Factories;

use SignInApp\Controllers\GetAllSignedInVisitorsController;
use Psr\Container\ContainerInterface;


class GetAllSignedInVisitorsControllerFactory
{
    public function __invoke(ContainerInterface $container) : GetAllSignedInVisitorsController
    {
        $visitorsModel = $container->get('VisitorsModel');
    }
}
