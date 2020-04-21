<?php

use Slim\App;
use Slim\Http\Request;
use Slim\Http\Response;

return function (App $app) {

    //Api Routes
    $app->get('/api/visitorSignIn', 'AddVisitorController');

};
