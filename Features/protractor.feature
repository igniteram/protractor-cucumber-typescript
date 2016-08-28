Feature: To search protractor in google

@ProtractorScenario
Scenario: Protractor Google Search
Given I am on google page
When I type "Protractor"
Then I click on search button
Then I clear the search text