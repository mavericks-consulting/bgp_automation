Feature: Happy path scenarios for the Business Grants Portal

   Happy path scenarios for the Business Grants Portal

Background:
  Given user has logged in to the BGP portal with CorpPass
  When they start the application process
  And they choose the Market Research Assistance grant

Scenario: User applies for a grant for Market Research Assistance (MRA) with valid data
  When they enter valid values in the Eligibility section
  And proceed to the next section
  And enter valid values in the Contact section
  And proceed to the next section
  And enter valid values in the Proposal section
  And proceed to the next section
  And enter valid values in the Business Impact section
  And proceed to the next section
  And enter valid values in the Cost section
  And proceed to the next section
  And complete the declaration
  And proceed to review the application
  And submit the application
  Then the application should be submitted
  And the company profile should be displayed
  And they should see the entered values in the Eligibility section in read-only mode
  And they should see the entered values in the Contact section in read-only mode
  And they should see the entered values in the Proposal section in read-only mode
  And they should see the entered values in the Business Impact section in read-only mode
  And they should see the entered values in the Cost section in read-only mode
  And they should see the entered values in the Declaration section in read-only mode
  When they goto their My Grants dashboard
  Then they should be able to see the application under Processing tab

Scenario: Values entered in the Eligibility section are retained in the application when saved as draft
  When they enter valid values in the Eligibility section
  And save the application
  And refresh the page
  Then they should see the entered values in the Eligibility section

Scenario: User is able to enter a custom address and custom Letter of Offeree
  When they enter valid values in the Eligibility section
  And proceed to the next section
  And enter custom address and letter of offeree in the Contact section
  And save the application
  And refresh the page
  Then they should see the entered values in the Contact section
