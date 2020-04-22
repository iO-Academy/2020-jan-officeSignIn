<?php

namespace SignInApp\Entities;

use phpDocumentor\Reflection\Types\String_;

abstract class ValidationEntity
{
    /**
     * Sanitise as a string in the database table as data.
     * Removes all special chars, html chars and only excepts alphabetic chars and '-'
     * Then trims both sides
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

    /**
     * Checks if a string is above a given length and trims string down if it is too long
     *
     * @param $validateData - the string to validate
     *
     * @param $characterLength - an integer that represents the maximum character length
     *
     * @return false|string - the string, trimmed if necessary
     *
     */
    public static function validateLength(string $validateData, int $characterLength)  :string
    {
        if (strlen($validateData) > $characterLength) {
            $validateData = substr($validateData, 0, $characterLength);
        }

        return $validateData;
    }
}