<?php

namespace SignInApp\Factories;

use Psr\Container\ContainerInterface;
use SignInApp\Models\VisitorModel;

class VisitorModelFactory
{
    /**
     * Creates visitor model with dependencies.
     *
     * @param ContainerInterface $container
     *
     * @return VisitorModel returns object with db connection injected.
     */
    public function __invoke(ContainerInterface $container)
    {
        $db = $container->get('dbConnection');
        return new VisitorModel($db);
    }
}
