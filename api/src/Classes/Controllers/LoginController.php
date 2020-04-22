<?php

namespace SignInApp\Controllers;

use SignInApp\Models\AdminModel;
use \Firebase\JWT\JWT;

class LoginController
{
    private $adminModel;
    public function __construct(AdminModel $adminModel)
    {
        $this->adminModel = $adminModel;
    }

    public function __invoke($request, $response, $args)
    {
        $usersPasscode = $request->getParsedBodyParam('Passcode');
        $hashedPasscode = $this->adminModel->getHashedPasscode();

        if(password_verify($usersPasscode, $hashedPasscode['Passcode'])) {

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
