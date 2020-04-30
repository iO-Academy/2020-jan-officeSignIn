<?php

namespace SignInApp\ErrorHandlers;
use Slim\Http\Request as Request;
use Slim\Http\Response as Response;
use DomainException as Exception;


class ErrorHandler
{
    public function __invoke(Request $request, Response $response, Exception $exception)
    {
        $data['message']=$exception->getMessage();

        return $response
            ->withStatus(500)
            ->withJson($data);
    }
}