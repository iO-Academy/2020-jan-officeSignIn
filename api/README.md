# Office Signin Application

This application is built using Slim framework, OOP and the MVC structure.

## Setup

1. Clone repo
2. Run ```composer install``` in app route
3. Create database with name ```maydenSignIn``` and a either import template from db/ file or create your own with the following columns:
    - ```id``` : user id
    - ```Name``` : visitor name
    - ```Company``` : company the visitor is from
    - ```DateOfVisit``` : DATE format, date of visit
    - ```TimeOfSignIn``` : Time visitor signed in
    - ```TimeOfSignIn``` : Time visitor signed out
    - ```SignedIn``` : bool to say if signed in or out

4. Run ```composer start```

### Running Tests

- cd into the tests directory and run: ```../vendor/bin/phpunit .```

## Routes
- for local development use localhost:8080/whatYouRequire as your URL

**/api/visitorSignIn**

POST
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
            - `{ "Success": false, "Message": "Unable to connect to server, "Data": [] }`
            
**/api/admin**
GET

You must be authenticated to retrieve data from this route

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