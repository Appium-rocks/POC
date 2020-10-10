Feature: Bank Application Under Test
  As a user of the bank
  I want to login to the app
  So i can do further transactions

  Background: I am already Logged in
    Given i launched the app
    When i enter the user name as  "company"
    And i enter the password as "company"
    Then i am logged in
    
    
    Scenario: I am trying to make payment
    When i click on Make Payment
    And i enter "8989887876", "The Team","25","Switzerland"
    And i hit Send Payment
    Then i am able to make a payment
    And i am logging off

   

  Scenario: I am trying to make a Mortgage Request
    When i click on Mortgage Request
    And i fill out all the details
    Then i am able to make a loan request
    And i am logging off

  Scenario: I am trying to make an Expense Report
    When i click on Expense Report
    And i click on add Expense
    Then i am able to add the expense
    And i am logging off
    And i close the application

  