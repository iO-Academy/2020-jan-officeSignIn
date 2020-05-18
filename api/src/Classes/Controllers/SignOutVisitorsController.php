<?php

namespace SignInApp\Controllers;

use SignInApp\Models\VisitorModel;
use \DateTime;
use Slim\Http\Request;
use Slim\Http\Response;

class SignOutVisitorsController
{
    private $visitorModel;

    /** Constructor assigns VisitorModel to this object
     *  SignOutVisitorsController constructor.
     *
     * @param VisitorModel $visitorModel
     */
    public function __construct(VisitorModel $visitorModel)
    {
        $this->visitorModel = $visitorModel;
    }

    public function __invoke(Request $request, Response $response, array $args)
    {
        $requestData = $request->getParsedBody();
        $option = $requestData['Option'];

        $apiResponse = [
            'Success' => false,
            'Message' => 'Unable to connect to server',
            'Data' => []
        ];
        $statusCode = 500;

        if (!(isset($option)) || $option !== 'all-previous') {
            $statusCode = 400;
            $apiResponse['Message'] = 'Option must be set and set to \'all-previous\'';
            return $response->withJson($apiResponse, $statusCode);
        }

        return $response->withJson($apiResponse, $statusCode);
    }
}