Feature: Products supported test

Scenario: Check the Products supported list
    Given User logs in to the portal
    And goes to Repertoiremanagementmodule
    When they scroll to additional feature
    And click on products supported
    Then List of products should be displayed

    