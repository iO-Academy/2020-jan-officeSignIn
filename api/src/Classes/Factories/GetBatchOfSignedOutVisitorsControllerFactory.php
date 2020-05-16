<?php

namespace SignInApp\Factories;

use Psr\Container\ContainerInterface;
use SignInApp\Controllers\GetBatchOfSignedOutVisitorsController;

class GetBatchOfSignedOutVisitorsControllerFactory
{
    /**
     * when invoked, instantiate a GetBatchOfSignedOutVisitorsController
     *
     * @param ContainerInterface $container
     *
     * @return mixed
     */
    public function __invoke(ContainerInterface $container)
    {
        $visitorModel = $container->get('VisitorModel');
        return new GetBatchOfSignedOutVisitorsController($visitorModel);
    }
}
