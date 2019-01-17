Feature: To search typescript in google

@TypeScriptScenario
Scenario: Typescript Google Search
Given I am on "protractor" search page
When I type "typescript"
When I click on search button
Then I clear the search text
Then I click on google logo