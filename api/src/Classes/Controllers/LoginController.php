<?php

namespace SignInApp\Controllers;

use Slim\Http\Request;
use Slim\Http\Response;
use SignInApp\Models\AdminModel;
use SignInApp\Entities\ValidationEntity;
use \Firebase\JWT\JWT;

class LoginController extends ValidationEntity
{
    private $adminModel;

    /**
     * LoginController constructor.
     *
     * @param AdminModel $adminModel - the admin model passed in
     */
    public function __construct(AdminModel $adminModel)
    {
        $this->adminModel = $adminModel;
    }

    /**
     * Compares entered passcode against hashed passcode in the database, returns a jwt key if successful
     * or an error message if not
     *
     * @param $request
     *
     * @param $response
     *
     * @param $args
     *
     * @return object - the data to return to the requestor
     */
    public function __invoke(Request $request, Response $response, array $args) :object
    {
        $adminPasscode = $request->getParsedBodyParam('Passcode');

        if (!self::checkFourDigitInput($adminPasscode)) {
            $data = [
                "success" => false,
                "message" => "credentials incorrect"
            ];
            return $response->withJson($data);
        }

        $hashedPasscode = $this->adminModel->getHashedPasscode();

        if(password_verify($adminPasscode, $hashedPasscode[0]['passcode'])) {

            //move key to seperate file
            $key = "super_secret_key";
            $expiryTimestamp = time() + 60;
            $payload = [
                "exp" => $expiryTimestamp,
                "iat" => time()
            ];
            $jwt = JWT::encode($payload, $key);
            $data = [
                "success" => true,
                "token" => $jwt
            ];
            return $response->withJson($data);
        } else {
            $data = [
                "success" => false,
                "message" => "credentials incorrect"
            ];
            return $response->withJson($data);
        }
    }
}
