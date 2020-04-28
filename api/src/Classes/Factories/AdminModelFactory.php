<?php

namespace SignInApp\Factories;

use Psr\Container\ContainerInterface;
use SignInApp\Models\AdminModel;

class AdminModelFactory
{
    /**
     * Creates admin model with dependencies.
     *
     * @param ContainerInterface $container
     *
     * @return AdminModel returns object with db connection injected.
     */
    public function __invoke(ContainerInterface $container)
    {
        $db = $container->get('dbConnection');
        return new AdminModel($db);
    }
}
