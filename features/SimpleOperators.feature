@simple
Feature: Using calculator to calculate simple operators
  As a user
  I want to calculate basic operations
  So that I don't need to calculate by myself

  Scenario: Add two numbers
    Given I have calculator
    When I add 4 and 3
    Then I should see 7