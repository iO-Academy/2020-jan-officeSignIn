<?php

namespace SignInApp\Models;

use phpDocumentor\Reflection\Types\Boolean;

class VisitorsModel
{
    private $db;

    /**
     * VisitorsModel constructor grabs db connection
     *
     * @param \PDO $db
     */
    public function __construct(\PDO $db)
    {
        $this->db = $db;
    }

    /**
     *  Adds new visitor to the database and returns a bool based on success or failure
     *
     * @param $Name
     * @param $Company
     * @return bool
     */
    public function addVisitor($Name, $Company) : bool
    {
        $query = $this->db->prepare("INSERT INTO `visitors` (`Name`, `Company`) VALUES (:Name, :Company);");
        $query->bindParam(':Name', $Name);
        $query->bindParam(':Company', $Company);
        return $query->execute();
    }
}