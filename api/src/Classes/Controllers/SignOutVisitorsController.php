<?php

namespace SignInApp\Controllers;

use SignInApp\Models\VisitorModel;
use \DateTime;
use Slim\Http\Request;
use Slim\Http\Response;

class SignOutVisitorsController
{
    private $visitorModel;

    /**
     *  Constructor assigns VisitorModel to this object
     *  SignOutVisitorsController constructor.
     *
     * @param VisitorModel $visitorModel
     */
    public function __construct(VisitorModel $visitorModel)
    {
        $this->visitorModel = $visitorModel;
    }

    /**
     *  On invoke checks option set in request and updates signed out where signed in is 1 and date of visit
     *  is not the current date
     *
     * @param Request $request
     * @param Response $response
     * @param array $args
     * @return Response
     */
    public function __invoke(Request $request, Response $response, array $args)
    {
        $requestData = $request->getParsedBody();
        $option = $requestData['Option'];
        $now = new DateTime('Europe/London');
        $timeOfSignOut = $now->format('H:i:s');

        $apiResponse = [
            'Success' => false,
            'Message' => 'Unable to connect to server',
            'Data' => []
        ];
        $statusCode = 500;

        if (!(isset($option)) || $option !== 'all-previous') {
            $statusCode = 400;
            $apiResponse['Message'] = 'Key must be \'Option\', must be set and set to \'all-previous\'';
            return $response->withJson($apiResponse, $statusCode);
        }

        if ($option === 'all-previous') {
            $updatedVisitors = $this->visitorModel->signOutAllVisitorsUpToToday($timeOfSignOut);
            if ($updatedVisitors === true) {
                $statusCode = 200;
                $apiResponse['Success'] = true;
                $apiResponse['Message'] = 'Successfully updated visitors';
                return $response->withJson($apiResponse, $statusCode);
            }
        }

        return $response->withJson($apiResponse, $statusCode);
    }
}