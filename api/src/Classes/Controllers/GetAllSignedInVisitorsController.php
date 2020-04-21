<?php

namespace SignInApp\Controllers;

use SignInApp\Models\VisitorModel;
use Slim\Http\Request as Request;
use Slim\Http\Response as Response;

class GetAllSignedInVisitorsController
{
    private $visitorModel;

    /**
     * GetAllSignedInVisitorsController constructor.
     *
     * @param $visitorModel
     */
    public function __construct(VisitorModel $visitorModel)
    {
        $this->visitorModel = $visitorModel;
    }

    public function __invoke(Request $request, Response $response, array $args)
    {
        //once tested, surround this with an if statement to check admin logged in status
        $apiResponse = [
            'Success' => false,
            'Message' => 'Unable to connect to server',
            'Data' => []
        ];

        $statusCode = 500;

        $apiResponse['Data'] = $this->visitorModel->getAllSignedInVisitors();
        if (count($apiResponse['Data']) > 0) {
            $statusCode = 200;
            $apiResponse['Success'] = true;
            $apiResponse['Message'] = 'Successfully retrieved signed in visitors';
        } else {
            $statusCode = 404;
            $apiResponse['Message'] = 'No data retrieved or no data in database';
            $apiResponse['Data'] = [];
        }
        return $response->withJson($apiResponse, $statusCode);
    }
}