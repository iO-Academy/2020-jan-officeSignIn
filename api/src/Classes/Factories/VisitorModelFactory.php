<?php

namespace SignInApp\Factories;

use Psr\Container\ContainerInterface;
use SignInApp\Models\VisitorsModel;

class VisitorsModelFactory
{
    /**
     * Creates visitors model with dependencies.
     *
     * @param ContainerInterface $container
     *
     * @return VisitorsModel returns object with db connection injected.
     */
    public function __invoke(ContainerInterface $container)
    {
        $db = $container->get('dbConnection');
        return new VisitorsModel($db);
    }
}