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
        $responseData = [
            'Success' => false,
            'Message' => 'Error',
            'Data' => []
        ];
    }
}