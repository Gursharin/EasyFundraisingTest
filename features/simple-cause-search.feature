Feature: Simple cause search
  Search for the third result in the causes list

  Scenario: Enter 3 characters into the Find A Causes search field
    Given I open the Easy Fundraising website
    When I click on the Find A Cause link
    When I enter 'can' in the search field
    When I select cause number 3 in the results
    Then I should see 'Marie Curie Cancer Care' in the search results