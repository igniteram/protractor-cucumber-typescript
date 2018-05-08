Feature: To search protractor in google

@ProtractorScenario
Scenario: Protractor Google Search
Given I am on "cucumber" search page
When I type "protractor"
When I click on search button
Then I clear the search text