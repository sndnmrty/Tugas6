Feature: Testing the login in kasirAja

    Background:
        Given The user is on the login page

    Scenario: The user wants to negative test in the login page
        When The user inputs email "<email>" and password "<password>"
        And The user clicks on button login
        Then The user should see error message saying "<errorMessage>"

        Examples:
            | email             | password    | errorMessage                            |
            | jaya45@mail.com   | 123         | Kredensial yang Anda berikan salah      |
            | jaya45@mail.com   |             | \"password\" is not allowed to be empty |
            |                   | 12345       | \"email\" is not allowed to be empty    |
            | jaya45@mailcom    | 12345       | \"email\" must be a valid email         |
            |                   |             | \"email\" is not allowed to be empty    |

    Scenario: The user wants to positive test in the login page
        When The user inputs email "<email>" and password "<password>"
        And The user clicks on button login
        Then The user is redirected to the dashboard page

        Examples:
            | email           | password    | message  |
            | jaya45@mail.com | 12345       | kasirAja |