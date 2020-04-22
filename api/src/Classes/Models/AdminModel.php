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

    /**
     * queries database to return the hashed admin passcode for comparison
     *
     * @return array - an array of the signed in visitors
     */
    public function getHashedPasscode() :array
    {
        $query = $this->db->prepare(
            'SELECT `id`, `passcode` FROM `admins` WHERE `id` = 1;'
        );
        $query->execute();
        return $query->fetchAll();
    }
}
