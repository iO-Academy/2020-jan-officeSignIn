<?php

namespace SignInApp\Controllers;

use SignInApp\Models\VisitorsModel;
use Slim\Http\Request;
use Slim\Http\Response;

class AddVisitorController
{
    private $visitorsModel;

    /** Constructor assigns VisitorsModel to this object
     *  AddVisitorController constructor.
     *
     * @param VisitorsModel $visitorsModel
     */
    public function __construct(VisitorsModel $visitorsModel)
    {
        $this->visitorsModel = $visitorsModel;
    }

    public function __invoke(Request $request, Response $response, array $args)
    {
        $requestData = $request->getParsedBody();
        $name = $requestData['Name'];
        $company = $requestData['Company'];
        $responseData = [
            'Success' => false,
            'Message' => 'Error',
            'Data' => []
        ];
        $statusCode = http_response_code();

        if ($_SESSION['loggedIn'] === true) {
            if (isset($requestData['Name']) && strlen($requestData['Name']) > 0) {
                $successfulInsert = $this->visitorsModel->addVisitor($name, $company);
                if ($successfulInsert) {
                    $responseData = [
                        'Success' => true,
                        'Message' => 'Visitor successfully logged'
                    ];
                } elseif ($successfulInsert) {
                    $responseData = [
                        'Message' => 'Unable to connect to server'
                    ];
                } else {
                    $responseData =[
                        'Message' => 'Name is required'
                    ];
                    $statusCode = 400;
                }
            }
            return $response->withJson($responseData, $statusCode);
        }
    }
}