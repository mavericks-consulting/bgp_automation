Feature: Negative and failure cases for the Business Grants Portal

   Negative and failure cases for the Business Grants Portal

Scenario: User sees specific errors when they enter invalid values in various sections
  Given user has logged in to the BGP portal with CorpPass
  When they start the application process
  And they choose the Market Research Assistance grant
  
  When mark the company as registered outside SG in the Eligibility section
  Then they should see the specific errors in the Eligibility section
  
  When they navigate to the Contact section
  And enter an invalid contact name
  Then they should see an error count in the side bar
  And they should see the specific errors in the Contact section

  When they navigate to the Proposal section
  And enter an invalid project title
  Then they should see an error count in the side bar
  And they should see the specific errors in the Proposal section

  When they navigate to the Business Impact section
  And enter an invalid end date
  Then they should see an error count in the side bar
  And they should see the specific errors in the Business Impact section

  When they navigate to the Cost section
  And enter an invalid vendor name
  Then they should see an error count in the side bar
  And they should see the specific errors in the Cost section
