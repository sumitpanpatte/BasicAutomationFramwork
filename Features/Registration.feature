Feature: Registration

Scenario Outline: TC001-Negative_Verify Registration not allowed Due to legal reasons in some countries.
    
    Given user clicks on registration
    When User selects "<countries>" from country drop down
    Then Error message shoud be thrown
   
    
    Examples: 
      | countries  | 
      | Algeria |

  Scenario Outline: TC002-Verify User able to navigate from Account details section to Personal details section when all mandatory inputs are provided and "do not set limit" option selected. 
    
    Given user clicks on registration
    When User enters "<email>" and "<username>" and "<password>"
    And User selects Do not set limit
    And User Agree to terms and conditions
    And user click continue
    Then User able to navigate to Personal details section
    
    Examples: 
   |  email    | |username    ||password    |
   |sumit.panpatte@gmail.com| |cdjrmk14    ||Abc@1238    |
   
   
   Scenario Outline: TC003-Verify User able to navigate from Account details section to Personal details section when all mandatory inputs are provided and "set limit" option selected.

    Given user clicks on registration
    When User enters "<email>" and "<username>" and "<password>"
    And User selects set a limit with "<Type>"
    And User Agree to terms and conditions
    And user click continue
    Then User able to navigate to Personal details section
    
    Examples: 
   |  email    |              |username    ||password    | |Type   |
   |sumit.panpatte@gmail.com| |cdjrmk14    ||Abc@1238    | |Deposit |
   |sumit.panpatte@gmail.com| |cdjrmk14    ||Abc@1238    | |Loss |
   |sumit.panpatte@gmail.com| |cdjrmk14    ||Abc@1238    | |Stakes |


Scenario Outline: TC004-Verify User not allowed to navigate without agreeing to terms and condition. 
    
    Given user clicks on registration
    When User enters "<email>" and "<username>" and "<password>"
    And User selects Do not set limit
    And user click continue
    Then User is still on Account details section
    
    Scenario Outline: TC005-Verify User is not allowed to navigate further in application with either of invalid emailid, invalid username or invalid password.
    
    Given user clicks on registration
    When User enters "<invalidEmail>" and "<invalidUsername>" and "<InvalidPassword>"
    And User selects Do not set limit
    And User Agree to terms and conditions
    And user click continue
    Then User is still on Account details section
    
    Examples: 
   |  invalidEmail          |   |invalidUsername    |   |InvalidPassword    |
   |sumit.panpatte          |   |cdjrmk14           |   |Abc@1238           |
   |sumit.panpatte@gmail.com|   |cdj                |   |Abc@1238           |
   |sumit.panpatte@gmail.com|   |cdjeks             |   |Abc@1    |
   
   
   Scenario Outline: TC006-Verify User is not allowed to navigate further in application with either of invalid emailid, invalid username or invalid password.
    
    Given user clicks on registration
    When User enters "<Email>" and "<ExistingUsername>" and "<Password>"
    And User selects Do not set limit
    And User Agree to terms and conditions
    And user click continue
    Then User is still on Account details section
    
    Examples: 
   |  Email        |            |ExistingUsername   |   |Password    |
   |sumit.panpatte@gmail.com|   |abcdef            |   |Abc@1238    |
  
 Scenario: TC007-Verify terms and condition link is working.
    
    Given user clicks on registration
    When User clicks on terms and condition link
    Then Terms and condition link should open
   
   
   