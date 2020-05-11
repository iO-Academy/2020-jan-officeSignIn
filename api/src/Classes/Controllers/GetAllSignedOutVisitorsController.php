<?php

namespace SignInApp\Controllers;


use Slim\Http\Request;
use Slim\Http\Response;
use SignInApp\Models\VisitorModel;

class GetAllSignedOutVisitorsController
{
    private $visitorModel;

    /**
     *
     * GetAllSignedOutVisitorsController constructor.
     *
     * @param VisitorModel $visitorModel
     */
    public function __construct(VisitorModel $visitorModel)
    {
        $this->visitorModel = $visitorModel;
    }

    /**
     * upon invoke, get all signed out visitors using Visitor Model, and generate a json response
     *
     * @param Request $request
     *
     * @param Response $response
     *
     * @param array $args
     *
     * @return Response
     */
    public function __invoke(Request $request, Response $response, array $args)
    {
        $apiResponse = [
            'Success' => false,
            'Message' => 'Unable to connect to server',
            'Data' => []
        ];

        $statusCode = 500;

        $apiResponse['Data'] = $this->visitorModel->getAllSignedOutVisitors();
        if (count($apiResponse['Data']) > 0 ) {
            $statusCode = 200;
            $apiResponse['Success'] = true;
            $apiResponse['Message'] = 'Successfully retrieved signed out visitors';
        } else {
            $statusCode = 404;
            $apiResponse['Message'] = 'No data retrieved or no data in database';
            $apiResponse['Data'] = [];
        }
        return $response->withJson($apiResponse, $statusCode);
    }
}