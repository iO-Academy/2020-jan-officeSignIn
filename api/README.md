# Office Signin Application

This application is built using Slim framework, OOP and the MVC structure.

## Setup

1. Clone repo
2. Run ```composer install``` in app route
3. Create database with name ```maydenSignIn``` and a either import template from db/ file or create your own with the following columns:
    - ```id``` : user id
    - ```Firstname``` : first name
    - ```Surname``` : surname
    - ```Company``` : company the visitor is from
    - ```DateOfVisit``` : DATE format, date of visit
    - ```TimeOfSignIn``` : Time visitor signed in
    - ```TimeOfSignIn``` : Time visitor signed out
    - ```SignedIn``` : bool to say if signed in or out

4. Run ```composer start```

## Running Tests

- cd into the tests directory and run: ```../vendor/bin/phpunit .```
