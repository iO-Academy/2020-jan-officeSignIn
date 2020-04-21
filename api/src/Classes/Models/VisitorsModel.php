<?php

namespace SignInApp\Models;

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
}