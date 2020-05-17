# Office Signin Application

This application is built using Slim framework, OOP and the MVC structure.

## Setup

1. Clone repo
2. Run ```composer install``` in api directory
3. Create database with name ```maydenSignIn``` and either import template from db/ file or create your own with the following tables:
 - ```visitors``` with the following fields:
    - ```id``` : user id (auto generated)
    - ```Name``` : visitor name
    - ```Company``` : company the visitor is from
    - ```DateOfVisit``` : DATE format, date of visit
    - ```TimeOfSignIn``` : Time visitor signed in
    - ```TimeOfSignIn``` : Time visitor signed out
    - ```SignedIn``` : bool to say if signed in or out
    
 - ```admins``` with the following fields:
    - ```id``` : id (auto generated)
    - ```passcode``` : a hashed 4 digit passcode

4. Run ```composer start``` in the api directory

### Running Tests

- cd into the tests directory and run: ```../vendor/bin/phpunit .```
- or in the api directory run: ```composer test```

## Routes
- for local development use localhost:8080/whatYouRequire as your URL

### POST
**/api/visitorSignIn**

- Logs a new visitor to DB
- Required
    - `Name` - visitor's first name 
- Optional
    - `Company` - company visitor represents
- Sends: 
  - `{ "Name": "string", "Company": "string" }`
- Returns:
    - if successful 
        - `status 200`
        - `{ "Success": true, "Message": "Visitor successfully logged", "Data": [] }`  
    - if unsuccessful
        - `status 400` 
            - `{ "Success": false, "Message": "Name is required", "Data": [] }`
        - `status 500` 
            - `{ "Success": false, "Message": "Unable to connect to server", "Data": [] }`
            
### GET
**/api/admin**

You must be authenticated to retrieve data from this route.
To test, passcode is 8974.

- Gets all Visitors currently signed in
- Required
    - None
- Optional
    - None
    
- Returns:
    - if successful 
        - `status 200`
        - `{ "Success": true, "Message": "Successfully retrieved signed in visitors", "Data": [ { retrieved data } ] }`  
    - if unsuccessful
        - `status 400` 
            - `{ "Success": false, "Message": "No data retrieved or no data in database", "Data": [] }`
        - `status 500` 
            - `{ "Success": false, "Message": "Unable to connect to server", "Data": [] }`
            
            
### PUT
**/api/visitorSignOut**

- Sets visitor to signed out in the database (signed in flag to 0)
- Logs time visitor signed out in the DB

1.Visitor signing themself out (if one match):

- Required
    - `Name` - visitor's first name 
- Optional
    - `Company` - company visitor represents

- Sends: 
    - `{ "Name": "string", "Company": "string" }`
    
    - Returns:
        - if successful 
            - `status 200`
            - `{ "Success": true, "Message": "Visitor successfully signed out", "Data": [] }`  
        - if unsuccessful
            - `status 422` 
                - `{ "Success": false, "Message": "Multiple matches found", "Data": [all matches on same name and their time of sign out] }`
            - `status 500` 
                - `{ "Success": false, "Message": "Unable to connect to server", "Data": [] }`
    
    OR

2.Admin user signing a visitor out (or if multiple matches for visitor signing themself out):

- Required
    
    - `id` - visitor's database id (on click of a specific visitor)
    
- Sends: 
  - `{ "ID": "integer" }`

- Returns:
    - if successful 
        - `status 200`
        - `{ "Success": true, "Message": "Visitor successfully signed out", "Data": [] }`  
    - if unsuccessful
        - `status 400` 
            - `{ "Success": false, "Message": "Name or ID is required", "Data": [] }`
        - `status 500` 
            - `{ "Success": false, "Message": "Unable to connect to server", "Data": [] }`
            

### GET
**/api/signedOutVisitors**

You must be authenticated to retrieve data from this route.
To test, passcode is 8974.

- Gets all visitors currently signed out
- Required
    - None
- Optional
    - None
    
- Returns:
    - if successful 
        - `status 200`
        - `{ "Success": true, "Message": "Successfully retrieved signed out visitors", "Data": [ { retrieved data } ] }`  
    - if unsuccessful
        - `status 400` 
            - `{ "Success": false, "Message": "No data retrieved or no data in database", "Data": [] }`
        - `status 500` 
            - `{ "Success": false, "Message": "Unable to connect to server", "Data": [] }`
            

### GET
**/api/signedOutVisitorsByBatch{count}{start}**

You must be authenticated to retrieve data from this route.
To test, passcode is 8974.

- Gets a batch of visitors currently signed out. The batch returned depends on the amount you want returned, set by the count variable and the starting position within the db
- Required query parameters 
    - `count` - the amount of visitors you want returned
    - `start` - the position within the db you want to start collecting the batch from
- Optional
    - None
- Example request: `api/signedOutVisitorsByBatch?count=15&start=203`
    
- Returns:
    - if successful 
        - `status 200`
        - `{ "Success": true, "Message": "Successfully retrieved signed out visitors", "Data": [ { retrieved data } ] }`  
    - if unsuccessful
        - `status 400` 
            - `{ "Success": false, "Message": "No data retrieved or no data in database", "Data": [] }`
        - `status 500` 
            - `{ "Success": false, "Message": "Unable to connect to server", "Data": [] }`