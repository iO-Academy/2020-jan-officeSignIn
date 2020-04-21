<?php

namespace SignInApp\Controllers;

use SignInApp\Models\VisitorsModel;
use Slim\Http\Request as Request;
use Slim\Http\Response as Response;

class GetAllSignedInVisitorsController
{
    private $visitorsModel;

    /**
     * GetAllSignedInVisitorsController constructor.
     *
     * @param $visitorsModel
     */
    public function __construct(VisitorsModel $visitorsModel)
    {
        $this->visitorsModel = $visitorsModel;
    }

    public function __invoke(Request $request, Response $response, array $args)
    {
        //once tested, surround this with an if statement to check admin logged in status
        $apiResponse = [
            'Success' => false,
            'Message' => 'Unable to retrieve data',
            'Data' => []
        ];

        $apiResponse['Data'] = $this->visitorsModel->getAllSignedInVisitors();
        return $response->withJson($apiResponse);
    }
}