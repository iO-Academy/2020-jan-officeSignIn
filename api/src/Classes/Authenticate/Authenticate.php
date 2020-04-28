<?php

namespace SignInApp\Authenticate;
use \Firebase\JWT\JWT;
use Slim\Http\Request as Request;
use Slim\Http\Response as Response;

class Authenticate
{
    private $jwtKey;

    /**
     * Authenticate constructor.
     *
     * @param string $jwtKey
     */
    public function __construct(string $jwtKey)
    {
       $this->jwtKey = $jwtKey;
    }

    /**
     * Checks that a valid bearer token has been provided
     *
     * @param Request $request
     *
     * @param Response $response
     *
     * @param $next
     *
     * @return Response
     */
    public function __invoke(Request $request, Response $response, $next)
    {
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
            $decoded = JWT::decode($bearerToken, $this->jwtKey, array('HS256'));
        } catch (\Firebase\JWT\ExpiredException $e) {
            return $response->withJson(["success"=>false, "message"=>"Token has expired"]);
        } catch (\Firebase\JWT\SignatureInvalidException $e) {
            return $response->withJson(["success"=>false, "message"=>"Invalid token"]);
        }
        return $next($request, $response);
//        return $response;
    }
}
