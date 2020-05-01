<?php

namespace SignInApp\ErrorHandlers;
use Slim\Http\Request as Request;
use Slim\Http\Response as Response;
use DomainException as Exception;

class ErrorHandler
{
    /**
     * A handler to send the error message on application errors as JSON.
     *
     * @param Request $request - the http request
     *
     * @param Response $response - the http response
     *
     * @param Exception $exception - the error thrown
     *
     * @return Response - the http response with JSON
     */
    public function __invoke(Request $request, Response $response, Exception $exception)
    {
        $data['message']=$exception->getMessage();

        return $response
            ->withStatus(500)
            ->withJson($data);
    }
}
