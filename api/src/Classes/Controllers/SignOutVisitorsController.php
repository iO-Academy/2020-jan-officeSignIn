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
        $optionStatus = false;

        $apiResponse = [
            'Success' => false,
            'Message' => 'Unable to connect to server',
            'Data' => []
        ];
        $statusCode = 500;

        if ($option === 'all-previous' || $option === 'all-current') {
            $optionStatus = true;
        }

        if (!(isset($option)) || $optionStatus === false) {
            $statusCode = 400;
            $apiResponse['Message'] = 'Key must be \'Option\'. Value must be either \'all-previous\' or \'all-current\'';
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

        if ($option === 'all-current') {
            $updatedVisitors = $this->visitorModel->signOutAllVisitors($timeOfSignOut);
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