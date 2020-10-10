$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./Features/app.feature");
formatter.feature({
  "line": 1,
  "name": "Bank Application Under Test",
  "description": "As a user of the bank\nI want to login to the app\nSo i can do further transactions",
  "id": "bank-application-under-test",
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
  "duration": 42370644361,
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
  "duration": 6343626393,
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
  "duration": 996679809,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_am_logged_in()"
});
formatter.result({
  "duration": 971481474,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "I am trying to make payment",
  "description": "",
  "id": "bank-application-under-test;i-am-trying-to-make-payment",
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
  "duration": 4583518865,
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
  "duration": 5492285622,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_hit_Send_Payment()"
});
formatter.result({
  "duration": 1159194337,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_am_able_to_make_a_payment()"
});
formatter.result({
  "duration": 1099355117,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_am_logging_off()"
});
formatter.result({
  "duration": 1416852731,
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
  "duration": 108482,
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
  "duration": 5148545131,
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
  "duration": 965204200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_am_logged_in()"
});
formatter.result({
  "duration": 980837906,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "I am trying to make a Mortgage Request",
  "description": "",
  "id": "bank-application-under-test;i-am-trying-to-make-a-mortgage-request",
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
  "duration": 37011,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_fill_out_all_the_details()"
});
formatter.result({
  "duration": 27877,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_am_able_to_make_a_loan_request()"
});
formatter.result({
  "duration": 18206,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_am_logging_off()"
});
formatter.result({
  "duration": 1313741160,
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
  "duration": 79429,
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
  "duration": 4137053301,
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
  "duration": 883824815,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_am_logged_in()"
});
formatter.result({
  "duration": 979489799,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "I am trying to make an Expense Report",
  "description": "",
  "id": "bank-application-under-test;i-am-trying-to-make-an-expense-report",
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
  "duration": 29518,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_click_on_add_Expense()"
});
formatter.result({
  "duration": 23497,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_am_able_to_add_the_expense()"
});
formatter.result({
  "duration": 19515,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_am_logging_off()"
});
formatter.result({
  "duration": 1364145112,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_close_the_application()"
});
formatter.result({
  "duration": 9161341610,
  "status": "passed"
});
});