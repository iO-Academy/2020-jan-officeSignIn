<?php

namespace SignInApp\Controllers;

use SignInApp\Entities\ValidationEntity;
use Slim\Http\Request;
use Slim\Http\Response;
use SignInApp\Models\VisitorModel;

class GetBatchOfSignedOutVisitorsController extends ValidationEntity
{
    private $visitorModel;

    /**
     * GetBatchOfSignedOutVisitorsController constructor.
     *
     * @param VisitorModel $visitorModel
     */
    public function __construct(VisitorModel $visitorModel)
    {
        $this->visitorModel = $visitorModel;
    }

    public function __invoke(Request $request, Response $response, array $args)
    {
        $count = $_GET['count'];
        $start = $_GET['start'];
        $responseData = [
            'Success' => false,
            'Message' => 'Unable to connect to server',
            'Data' => []
        ];
        $statusCode = 500;

        if (strlen($count) < 1 || strlen($start) < 1 ||
            self::checkDigitInput($count) === false || self::checkDigitInput($start) === false) {
            $statusCode = 400;
            $responseData['Message'] = 'Count and Start can not be empty and must be a number';
            return $response->withJson($responseData, $statusCode);
        }

        $responseData['Data'] = $this->visitorModel->getBatchOfSignedOutVisitors($count, $start);
        if (count($responseData['Data']) > 0) {
            $statusCode = 200;
            $apiResponse['Success'] = true;
            $apiResponse['Message'] = 'Successfully retrieved signed out visitors';
        } else {
            $statusCode = 404;
            $apiResponse['Message'] = 'No data retrieved or no data in database';
            $apiResponse['Data'] = [];
        }

//        var_dump($count);
//        var_dump($start);

        return $response->withJson($responseData, $statusCode);



    }
}
