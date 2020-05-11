<?php

namespace SignInApp\Factories;

use Psr\Container\ContainerInterface;
use SignInApp\Controllers\GetAllSignedOutVisitorsController;

class GetAllSignedOutVisitorsControllerFactory
{
    /**
     *  when invoked, instantiates a GetAllSignedOutVisitorsController
     *
     * @param ContainerInterface $container
     *
     * @return GetAllSignedOutVisitorsController
     */
    public function __invoke(ContainerInterface $container) : GetAllSignedOutVisitorsController
    {
        $visitorModel = $container->get('VisitorModel');
        return new GetAllSignedOutVisitorsController($visitorModel);
    }
}