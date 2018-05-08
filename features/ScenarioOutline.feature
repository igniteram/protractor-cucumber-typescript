Feature: To search keywords in google

@OutlineScenario
Scenario Outline: Searching on google
  
  Given I am on "<search>" search page
  When I type "<search keyword>"
  Then I click on search button
  Then I clear the search text

  Examples:
    | search | search keyword | 
    |  google   | cucumber |
    |  cucumber | protractor |
    |  protractor | typescript | 
  