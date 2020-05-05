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

    /**
     *  Signs out a visitor (sets signed in flag to 0 in the database) and returns a bool based on success or failure
     *
     * @param $Name
     * @param $Company (optional)
     * @return array
     */
    public function getVisitorsByName($Name, $Company)
    {
        //query to collect all people with same name/matches, (not fetching those will null company value)
        $query = $this->db->prepare(
            "SELECT `id`, `Name`, `TimeOfSignIn` 
                        FROM `visitors`
                        WHERE `Name` = :Name 
                        AND (`Company` = 'NULL' OR `Company` = '' OR `Company` = :Company)");
        $query->bindParam(':Name', $Name);
        $query->bindParam(':Company', $Company);
        $query->execute();
        return $query->fetchAll();

//        //if one result comes back sign them out, otherwise return all matches
//        if (count($allNameMatches) == 1) {
//            $query = $this->db->prepare("UPDATE `visitors`
//                                                    SET `SignedIn` = 0, `TimeOfSignOut` = :timeOfSignOut
//                                                    WHERE `Name` = :Name AND ((`Company` = 'NULL') OR (`Company` = :Company));");
//            $query->bindParam(':Name', $Name);
//            $query->bindParam(':Company', $Company);
//            $query->bindParam(':timeOfSignOut', $timeOfSignOut);
//            return $query->execute();
//        } else {
//            return $allNameMatches;
//        }
    }

    /**
     *  Signs out a visitor (sets signed in flag to 0 in the database) and returns a bool based on success or failure
     *
     * @param $id
     * @return bool
     */
    public function signOutVisitorById($id, $timeOfSignOut) : bool
    {
        $query = $this->db->prepare("UPDATE `visitors` 
                                                SET `SignedIn` = 0, `TimeOfSignOut` = :timeOfSignOut
                                                WHERE `id` = :id;");
        $query->bindParam(':id', $id);
        $query->bindParam(':timeOfSignOut', $timeOfSignOut);
        return $query->execute();
    }
}