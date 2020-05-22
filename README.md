# Business Grants Portal automation using Cypress.

### To-do before running the test.
- Please fill the template in the cypress/fixtures/loginData.json

### To run the test

```
npm run runTest
```

### Some observations noticed in the application during automation
- The 'My Grants' dashbaord takes a lot of time to load (around 40-50 seconds). This created the need to modify the default Cypress command timeout.
- The 'User Story 1' for Eligibility section mentions the presence of 4 questions to be answered. However, in the app there are 5 questions to be answered. Not sure if this is an expected functional change.
- The 'User Story 1' for Eligibility section mentions that a warning message should be displayed when the questions are answered as No. The actual message in the app is different from the one mentioned in the story. Not sure if this is an expected functional change.
- Over the week, I noticed that a new question (about project commencement) was added to the Declaration section. Not sure if this is an expected functional change.

### Coverage gaps (things can be thought through to be added for more coverage)
- The current scripts cover some error conditions. However, there is room for more coverage on more negative flows. However, I would personally prefer to cover these error conditions at a more integration test layer rather than the functional test layer.
- The current scripts only cover the MRA workflow for IT. Not sure if other industry sectors will have the same workflow or if there are specific workflows. Need more time and functional context on this.
