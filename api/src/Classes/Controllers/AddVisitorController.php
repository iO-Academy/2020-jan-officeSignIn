<?php

namespace SignInApp\Controllers;

use SignInApp\Models\VisitorModel;
use SignInApp\Entities\ValidationEntity;
use \DateTime;
use Slim\Http\Request;
use Slim\Http\Response;

class AddVisitorController extends ValidationEntity
{
    private $visitorModel;

    /** Constructor assigns VisitorModel to this object
     *  AddVisitorController constructor.
     *
     * @param VisitorModel $visitorsModel
     */
    public function __construct(VisitorModel $visitorsModel)
    {
        $this->visitorModel = $visitorsModel;
    }

    /**
     *  On invoke check input for Name value, if data there, call addVisitor method
     *  from VisitorModel and response whether that was successful or not
     *
     * @param Request $request
     * @param Response $response
     * @param array $args
     * @return Response
     */
    public function __invoke(Request $request, Response $response, array $args)
    {
        $requestData = $request->getParsedBody();
        $name = self::sanitiseString($requestData['Name']);
        $company = self::sanitiseString($requestData['Company']);
        $dateOfVisit = date("Y-m-d");

        $now = new DateTime('Europe/London');
        $timeOfSignIn = $now->format('H:i:s');

        $signedIn = 1;
        $responseData = [
            'Success' => false,
            'Message' => 'Error',
            'Data' => []
        ];
        $statusCode = 500;

        if (isset($requestData['Name']) && strlen($requestData['Name']) > 0) {
            $successfulInsert = $this->visitorModel->addVisitor($name, $company, $dateOfVisit, $timeOfSignIn, $signedIn);
            if ($successfulInsert) {
                $responseData = [
                    'Success' => true,
                    'Message' => 'Visitor successfully logged'
                ];
                $statusCode = 200;
            } else {
                $responseData = [
                    'Success' => false,
                    'Message' => 'Unable to connect to server'
                ];
            }
        } else {
            $responseData =[
                'Success' => false,
                'Message' => 'Name is required'
            ];
            $statusCode = 400;
        }
        return $response->withJson($responseData, $statusCode);
    }
}