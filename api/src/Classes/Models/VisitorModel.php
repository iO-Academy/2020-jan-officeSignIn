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
            'SELECT `id`, `Name`, `Company`, `DateOfVisit`, `TimeOfSignIn` 
            FROM `visitors`
            WHERE `DateOfVisit` = CURDATE() 
            AND `SignedIn` = 1;'
        );
        $query->execute();
        return $query->fetchAll();
    }

    /**
     * queries database to return all signed out visitors who signed out today
     *
     * @return array
     */
    public function getAllSignedOutVisitors() : array
    {
        $query = $this->db->prepare(
            'SELECT `id`, `Name`, `Company`, `DateOfVisit`, `TimeOfSignIn`, `TimeOfSignOut` 
            FROM `visitors`
            WHERE `DateOfVisit` = CURDATE() 
            AND `SignedIn` = 0;'
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
        $query = $this->db->prepare(
            "INSERT INTO `visitors` (`Name`, `Company`, `DateOfVisit`, `TimeOfSignIn`, `SignedIn`) 
            VALUES (:Name, :Company, :dateOfVisit, :timeOfSignIn, :signedIn);"
        );
        $query->bindParam(':Name', $Name);
        $query->bindParam(':Company', $Company);
        $query->bindParam(':dateOfVisit', $dateOfVisit);
        $query->bindParam(':timeOfSignIn', $timeOfSignIn);
        $query->bindParam(':signedIn', $signedIn);
        return $query->execute();
    }

    /**
     *  Getting visitors by name match.
     *
     * @param $Name
     * @return array
     */
    public function getSignedInVisitorsByName($Name)
    {
        $query = $this->db->prepare(
            "SELECT `id`, `Name`, `TimeOfSignIn` 
            FROM `visitors`
            WHERE `Name` = :Name
            AND `SignedIn` = 1 "
        );
        $query->bindParam(':Name', $Name);
        $query->execute();
        return $query->fetchAll();
    }

    /**
     *  Getting visitors by name and company match.
     *
     * @param $Name
     * @param $Company
     * @return array
     */
    public function getSignedInVisitorsByNameAndCompany($Name, $Company)
    {
        $query = $this->db->prepare(
            "SELECT `id`, `Name`, `TimeOfSignIn` 
            FROM `visitors`
            WHERE `Name` = :Name 
            AND `Company` = :Company
            AND `SignedIn` = 1 "
        );
        $query->bindParam(':Name', $Name);
        $query->bindParam(':Company', $Company);
        $query->execute();
        return $query->fetchAll();
    }

    /**
     *  Signs out a visitor (sets signed in flag to 0 in the database) and returns a bool based on success or failure
     *
     * @param $id
     * @return bool
     */
    public function signOutVisitorById($id, $timeOfSignOut) : bool
    {
        $query = $this->db->prepare(
            "UPDATE `visitors` 
            SET `SignedIn` = 0, `TimeOfSignOut` = :timeOfSignOut
            WHERE `id` = :id;"
        );
        $query->bindParam(':id', $id);
        $query->bindParam(':timeOfSignOut', $timeOfSignOut);
        return $query->execute();
    }
}