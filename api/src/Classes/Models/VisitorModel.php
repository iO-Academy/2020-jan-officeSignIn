<?php

namespace SignInApp\Models;

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

    public function getAllSignedInVisitors()
    {
        $query = $this->db->prepare(
            'SELECT `id`, `Name`, `Company`, `DateOfVisit`, `TimeOfSignIn` FROM `visitors`
            WHERE `DateOfVisit` = CURDATE() AND `SignedIn` = 1;'
        );
        $query->setFetchMode(\PDO::FETCH_ASSOC);
        $query->execute();
        return $query->fetchAll();
    }
}