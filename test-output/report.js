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
  "duration": 44915796368,
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
  "duration": 5981591260,
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
  "duration": 1023267421,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_am_logged_in()"
});
formatter.result({
  "duration": 966116578,
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
  "duration": 4433292726,
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
  "duration": 5785072757,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_hit_Send_Payment()"
});
formatter.result({
  "duration": 1166884614,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_am_able_to_make_a_payment()"
});
formatter.result({
  "duration": 1100314442,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_am_logging_off()"
});
formatter.result({
  "duration": 303862234,
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
  "duration": 153032466599,
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
  "duration": 5527506706,
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
  "duration": 1430647005,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_am_logged_in()"
});
formatter.result({
  "duration": 1062197201,
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
  "duration": 41210,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_fill_out_all_the_details()"
});
formatter.result({
  "duration": 25510,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_am_able_to_make_a_loan_request()"
});
formatter.result({
  "duration": 28285,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_am_logging_off()"
});
formatter.result({
  "duration": 298494695,
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
