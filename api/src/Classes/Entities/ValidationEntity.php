<?php

namespace SignInApp\Entities;

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
     * Checks if what is given is a four digit number
     *
     * @param $validateData - the data to validate
     *
     * @return bool - whether the data is a four digit number or not
     */
    public static function checkFourDigitInput($validateData)
    {
        if (preg_match('/^[\d]{4}$/', $validateData)) {
            return true;
        } else {
            return false;
        }
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

    /**
     * Checks if what is given is a digit/number
     *
     * @param $validateData - the data to validate
     *
     * @return bool - whether the data number or not
     */    public static function checkDigitInput($validateData)
    {
        if (preg_match('/^[\d]$/', $validateData)) {
            return true;
        } else {
            return false;
        }
    }

}

