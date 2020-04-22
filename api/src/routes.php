<?php

use Slim\App;
use Slim\Http\Request;
use Slim\Http\Response;

return function (App $app) {

    //Api Routes
    $app->post('/api/visitorSignIn', 'AddVisitorController');

    $app->post('/adminLogin', 'LoginController');

    $app->get('/api/admin', 'GetAllSignedInVisitorsController');

};
