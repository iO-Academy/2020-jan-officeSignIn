<?php

namespace SignInApp\Entities;

abstract class ValidationEntity
{
    /**
     * Sanitise as a string in the database table as data.
     *
     * @param $validateData
     *
     * @return string, which will return the validateData.
     */
    public static function sanitiseString($validateData)
    {
        $clean = filter_var($validateData, FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);
        $clean = preg_replace('/[^a-zA-Z\s\-]/', '', $clean);
        $clean = trim($clean);
        return $clean;
    }
}