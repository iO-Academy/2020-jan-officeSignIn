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
     * @return array sorted by date then time of sign out
     */
    public function getAllSignedOutVisitors() : array
    {
        $query = $this->db->prepare(
            'SELECT `id`, `Name`, `Company`, `DateOfVisit`, `TimeOfSignIn`, `TimeOfSignOut`
            FROM `visitors`
            WHERE `SignedIn` = 0
            ORDER BY `DateOfVisit` DESC, `TimeOfSignOut` DESC;'
        );
        $query->execute();
        return $query->fetchAll();
    }

    /**
     * Given a starting position / id returns an array of signed out visitors limited to the specified count
     *
     * @param $count
     * @param $start
     * @return array
     */
    public function getBatchOfSignedOutVisitors($count, $start)
    {
        $query = $this->db->prepare(
            'SELECT `id`, `Name`, `Company`, `DateOfVisit`, `TimeOfSignIn`, `TimeOfSignOut`
            FROM `visitors`
            WHERE `SignedIn` = 0
            AND `id` < :id
            ORDER BY `id` DESC
            LIMIT :count;'
        );
        $query->bindParam(':id', $start, \PDO::PARAM_INT);
        $query->bindParam(':count', $count, \PDO::PARAM_INT);
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
            AND `DateOfVisit` = CURDATE() 
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
            AND `DateOfVisit` = CURDATE() 
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

    /**
     * signs out all visitors who are currently signed in but DateOfVisit is not current days date
     *
     * @param $timeOfSignOut
     * @return bool
     */
    public function signOutAllVisitorsUpToToday($timeOfSignOut) : bool
    {
        $query = $this->db->prepare(
            'UPDATE `visitors` 
            SET `SignedIn` = 0, `TimeOfSignOut` = :timeOfSignOut
            WHERE `SignedIn` = 1
            AND `DateOfVisit` < CURDATE();'
        );
        $query->bindParam(':timeOfSignOut', $timeOfSignOut);
        return $query->execute();
    }

    /**
     * signs out all visitors who are currently signed in today
     *
     * @param $timeOfSignOut
     * @return bool
     */
    public function signOutAllVisitors($timeOfSignOut) : bool
    {
        $query = $this->db->prepare(
            'UPDATE `visitors` 
            SET `SignedIn` = 0, `TimeOfSignOut` = :timeOfSignOut
            WHERE `SignedIn` = 1
            AND `DateOfVisit` = CURDATE();'
        );
        $query->bindParam(':timeOfSignOut', $timeOfSignOut);
        return $query->execute();
    }
}