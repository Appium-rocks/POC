$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./Features/app.feature");
formatter.feature({
  "line": 1,
  "name": "eriBank Application Under Test",
  "description": "As a user of the bank\r\nI want to login to the app\r\nSo i can do further transactions",
  "id": "eribank-application-under-test",
  "keyword": "Feature"
});
formatter.background({
  "line": 6,
  "name": "I am already Logged in",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "i launched the app",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "i enter the user name as  \"company\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "i enter the password as \"company\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "i am logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.i_launched_the_app()"
});
formatter.result({
  "duration": 50513032900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "company",
      "offset": 27
    }
  ],
  "location": "Steps.i_enter_the_user_name_as(String)"
});
formatter.result({
  "duration": 6885682400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "company",
      "offset": 25
    }
  ],
  "location": "Steps.i_enter_the_password_as(String)"
});
formatter.result({
  "duration": 3163332900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_am_logged_in()"
});
formatter.result({
  "duration": 3123403900,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "I am trying to make payment",
  "description": "",
  "id": "eribank-application-under-test;i-am-trying-to-make-payment",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "i click on Make Payment",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "i enter \"8989887876\", \"The Team\",\"25\",\"Switzerland\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "i hit Send Payment",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "i am able to make a payment",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "i am logging off",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_click_on_Make_Payment()"
});
formatter.result({
  "duration": 3197310200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8989887876",
      "offset": 9
    },
    {
      "val": "The Team",
      "offset": 23
    },
    {
      "val": "25",
      "offset": 34
    },
    {
      "val": "Switzerland",
      "offset": 39
    }
  ],
  "location": "Steps.i_enter(String,String,String,String)"
});
formatter.result({
  "duration": 15996389000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_hit_Send_Payment()"
});
formatter.result({
  "duration": 3124367400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_am_able_to_make_a_payment()"
});
formatter.result({
  "duration": 3034613300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_am_logging_off()"
});
formatter.result({
  "duration": 3103774200,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "I am already Logged in",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "i launched the app",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "i enter the user name as  \"company\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "i enter the password as \"company\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "i am logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.i_launched_the_app()"
});
formatter.result({
  "duration": 247000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "company",
      "offset": 27
    }
  ],
  "location": "Steps.i_enter_the_user_name_as(String)"
});
formatter.result({
  "duration": 6709009500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "company",
      "offset": 25
    }
  ],
  "location": "Steps.i_enter_the_password_as(String)"
});
formatter.result({
  "duration": 3097930300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_am_logged_in()"
});
formatter.result({
  "duration": 3061821600,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "I am trying to make a Mortgage Request",
  "description": "",
  "id": "eribank-application-under-test;i-am-trying-to-make-a-mortgage-request",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "i click on Mortgage Request",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "i fill out all the details",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "i am able to make a loan request",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "i am logging off",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_click_on_Mortgage_Request()"
});
formatter.result({
  "duration": 4102862900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_fill_out_all_the_details()"
});
formatter.result({
  "duration": 25949514400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_am_able_to_make_a_loan_request()"
});
formatter.result({
  "duration": 29754597200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_am_logging_off()"
});
formatter.result({
  "duration": 3161084800,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "I am already Logged in",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "i launched the app",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "i enter the user name as  \"company\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "i enter the password as \"company\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "i am logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.i_launched_the_app()"
});
formatter.result({
  "duration": 95700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "company",
      "offset": 27
    }
  ],
  "location": "Steps.i_enter_the_user_name_as(String)"
});
formatter.result({
  "duration": 7708319500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "company",
      "offset": 25
    }
  ],
  "location": "Steps.i_enter_the_password_as(String)"
});
formatter.result({
  "duration": 3842755200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_am_logged_in()"
});
formatter.result({
  "duration": 3081712300,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "I am trying to make an Expense Report",
  "description": "",
  "id": "eribank-application-under-test;i-am-trying-to-make-an-expense-report",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "i click on Expense Report",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "i click on add Expense",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "i am able to add the expense",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "i am logging off",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "i close the application",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_click_on_Expense_Report()"
});
formatter.result({
  "duration": 67800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_click_on_add_Expense()"
});
formatter.result({
  "duration": 57500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_am_able_to_add_the_expense()"
});
formatter.result({
  "duration": 63600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_am_logging_off()"
});
formatter.result({
  "duration": 3346919400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_close_the_application()"
});
formatter.result({
  "duration": 19127215000,
  "status": "passed"
});
});