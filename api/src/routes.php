<?php

use Slim\App;
use Slim\Http\Request;
use Slim\Http\Response;

/**
 * To decide whether React app URL is from deployed app or local server (set is prod to true for deployed version)
 *
 * @return string- the URL needed
 */
function getBaseUrl() {
    $isProd = false;

    if($isProd) {
        return '{addProductionUrlHere}';
    } else {
        return 'http://localhost:3000';
    }
}

return function (App $app) {
    $app->options('/{routes:.+}', function ($request, $response, $args) {
        return $response;
    });

    $app->add(function ($req, $res, $next) {
        $url = getBaseUrl();
        $response = $next($req, $res);
        return $response
            ->withHeader('Access-Control-Allow-Origin', $url)
            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    });

    //Api Routes
    $app->post('/api/visitorSignIn', 'AddVisitorController');

    // Catch-all route to serve a 404 Not Found page if none of the routes match
    // NOTE: make sure this route is defined last
    $app->map(['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], '/{routes:.+}', function($req, $res) {
        $handler = $this->notFoundHandler; // handle using the default Slim page not found handler
        return $handler($req, $res);
    });
};


