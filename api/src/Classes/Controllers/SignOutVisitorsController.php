<?php

namespace SignInApp\Controllers;

use SignInApp\Models\VisitorModel;
use SignInApp\Entities\ValidationEntity;
use \DateTime;
use Slim\Http\Request;
use Slim\Http\Response;

class SignOutVisitorsController extends ValidationEntity
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
        // TODO: Implement __invoke() method.
    }
}