<?php

use Slim\App;

return function (App $app) {
    $container = $app->getContainer();

    // view renderer
    $container['renderer'] = function ($c) {
        $settings = $c->get('settings')['renderer'];
        return new \Slim\Views\PhpRenderer($settings['template_path']);
    };

    // monolog
    $container['logger'] = function ($c) {
        $settings = $c->get('settings')['logger'];
        $logger = new \Monolog\Logger($settings['name']);
        $logger->pushProcessor(new \Monolog\Processor\UidProcessor());
        $logger->pushHandler(new \Monolog\Handler\StreamHandler($settings['path'], $settings['level']));
        return $logger;
    };

    // DB connection
    $container['dbConnection'] = function ($c) {
        $settings = $c->get('settings')['db'];
        $db = new PDO($settings['host'] . $settings['dbName'], $settings['userName'], $settings['password']);
        $db->setAttribute(\PDO::ATTR_DEFAULT_FETCH_MODE, \PDO::FETCH_ASSOC);
        return $db;
    };

    //Error Handler
    $container['errorHandler'] = function () {
        return new \SignInApp\ErrorHandlers\ErrorHandler();
    };

    // JWT Key
    $container['jwtKey'] = function ($c) {
        return $c->get('settings')['jwtKey'];
    };

    //Models
    $container['VisitorModel'] = new \SignInApp\Factories\VisitorModelFactory();
    $container['AdminModel'] = new \SignInApp\Factories\AdminModelFactory();

    //Controllers
    $container['AddVisitorController'] = new \SignInApp\Factories\AddVisitorControllerFactory();
    $container['GetAllSignedInVisitorsController'] = new SignInApp\Factories\GetAllSignedInVisitorsControllerFactory();
    $container['LoginController'] = new SignInApp\Factories\LoginControllerFactory();
    $container['SignOutVisitorController'] = new \SignInApp\Factories\SignOutVisitorControllerFactory();
    $container['GetAllSignedOutVisitorsController'] = new SignInApp\Factories\GetAllSignedOutVisitorsControllerFactory();
    $container['GetBatchOfSignedOutVisitorsController'] = new SignInApp\Factories\GetBatchOfSignedOutVisitorsControllerFactory();

    //Authentication
    $container['Authenticate'] = new SignInApp\Factories\AuthenticateFactory();

};
