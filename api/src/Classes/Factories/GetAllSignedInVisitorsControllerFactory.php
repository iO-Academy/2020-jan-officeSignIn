<?php

namespace SignInApp\Factories;

use SignInApp\Controllers\GetAllSignedInVisitorsController;
use Psr\Container\ContainerInterface;


class GetAllSignedInVisitorsControllerFactory
{
    public function __invoke(ContainerInterface $container) : GetAllSignedInVisitorsController
    {
        $visitorModel = $container->get('VisitorModel');
        return new GetAllSignedInVisitorsController($visitorModel);
    }
}
