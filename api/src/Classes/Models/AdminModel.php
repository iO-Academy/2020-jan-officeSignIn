<?php

namespace SignInApp\Models;

class AdminModel
{
    private $db;

    /**
     * AdminModel constructor grabs db connection
     *
     * @param \PDO $db
     */
    public function __construct(\PDO $db)
    {
        $this->db = $db;
    }
}
