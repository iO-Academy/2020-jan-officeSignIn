<?php

namespace SignInApp\Authenticate;
use \Firebase\JWT\JWT;

class Authenticate
{
    public function __invoke($request, $response, $next)
    {
        var_dump($request->getHeader('HTTP_AUTHORIZATION'));
        //boot out if they dont have any Auth headers
        if(!$request->hasHeader('HTTP_AUTHORIZATION')){
            return $response->withJson(["success"=>false]);
        }
        //Grab the value of the auth header
        $authHeader = $request->getHeader('HTTP_AUTHORIZATION')[0];
        //Isolate the actual token string part of the header
        $requestString = explode(' ', $authHeader);
        //Grab the bearer token string from the array
        $bearerToken = $requestString[1];
        try {
            $key = "super_secret_key";
            $decoded = JWT::decode($bearerToken, $key, array('HS256'));
        } catch (\Firebase\JWT\ExpiredException $e) {
            return $response->withJson(["success"=>false, "message"=>"Token has expired"]);
        } catch (\Firebase\JWT\SignatureInvalidException $e) {
            return $response->withJson(["success"=>false, "message"=>"Incorrect token"]);
        }
        $next($request, $response);
        return $response;
    }
}
