<?php

namespace SignInApp\Factories;

use SignInApp\Controllers\GetAllSignedInVisitorsController;
use Psr\Container\ContainerInterface;


class GetAllSignedInVisitorsControllerFactory
{
    /**
     * when invoked, instantiates a GetAllSignedInVisitorsController
     *
     * @param ContainerInterface $container
     *
     * @return GetAllSignedInVisitorsController - the instantiated controller
     */
    public function __invoke(ContainerInterface $container) : GetAllSignedInVisitorsController
    {
        $visitorModel = $container->get('VisitorModel');
        return new GetAllSignedInVisitorsController($visitorModel);
    }
}
