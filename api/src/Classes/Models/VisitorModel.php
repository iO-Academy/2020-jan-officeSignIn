<?php

namespace SignInApp\Models;

use phpDocumentor\Reflection\Types\Boolean;

class VisitorModel
{
    private $db;

    /**
     * VisitorModel constructor grabs db connection
     *
     * @param \PDO $db
     */
    public function __construct(\PDO $db)
    {
        $this->db = $db;
    }

    /**
     * queries database to return all signed in visitors who signed in today
     *
     * @return array - an array of the signed in visitors
     */
    public function getAllSignedInVisitors() :array
    {
        $query = $this->db->prepare(
            'SELECT `id`, `Name`, `Company`, `DateOfVisit`, `TimeOfSignIn` FROM `visitors`
            WHERE `DateOfVisit` = CURDATE() AND `SignedIn` = 1;'
        );
        $query->execute();
        return $query->fetchAll();
    }

    /**
     *  Adds new visitor to the database and returns a bool based on success or failure
     *
     * @param $Name
     * @param $Company
     * @return bool
     */
    public function addVisitor($Name, $Company, $dateOfVisit, $timeOfSignIn, $signedIn) : bool
    {
        $query = $this->db->prepare("INSERT INTO `visitors` (`Name`, `Company`, `DateOfVisit`, `TimeOfSignIn`, `SignedIn`) 
            VALUES (:Name, :Company, :dateOfVisit, :timeOfSignIn, :signedIn);");
        $query->bindParam(':Name', $Name);
        $query->bindParam(':Company', $Company);
        $query->bindParam(':dateOfVisit', $dateOfVisit);
        $query->bindParam(':timeOfSignIn', $timeOfSignIn);
        $query->bindParam(':signedIn', $signedIn);
        return $query->execute();
    }
}
