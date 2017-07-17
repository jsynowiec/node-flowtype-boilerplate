Feature: Get a list of encounters

  Scenario: Doctor with no encounters
    Given a doctor with valid credentials
    And with no encounters
    When I request a list of encounters
    Then I should receive an empty list

  Scenario: Doctor with many encounters
    Given a doctor with valid credentials
    And with many encounters
    When I request a list of encounters
    Then I should receive a complete list
    