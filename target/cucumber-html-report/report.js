$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Registration.feature");
formatter.feature({
  "line": 1,
  "name": "Registration",
  "description": "",
  "id": "registration",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "TC001-Negative_Verify Registration not allowed Due to legal reasons in some countries.",
  "description": "",
  "id": "registration;tc001-negative-verify-registration-not-allowed-due-to-legal-reasons-in-some-countries.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user clicks on registration",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User selects \"\u003ccountries\u003e\" from country drop down",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Error message shoud be thrown",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "registration;tc001-negative-verify-registration-not-allowed-due-to-legal-reasons-in-some-countries.;",
  "rows": [
    {
      "cells": [
        "countries"
      ],
      "line": 11,
      "id": "registration;tc001-negative-verify-registration-not-allowed-due-to-legal-reasons-in-some-countries.;;1"
    },
    {
      "cells": [
        "Algeria"
      ],
      "line": 12,
      "id": "registration;tc001-negative-verify-registration-not-allowed-due-to-legal-reasons-in-some-countries.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 55682596823,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "TC001-Negative_Verify Registration not allowed Due to legal reasons in some countries.",
  "description": "",
  "id": "registration;tc001-negative-verify-registration-not-allowed-due-to-legal-reasons-in-some-countries.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user clicks on registration",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User selects \"Algeria\" from country drop down",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Error message shoud be thrown",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.user_clicks_on_registration()"
});
formatter.result({
  "duration": 9931767489,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Algeria",
      "offset": 14
    }
  ],
  "location": "Registration.user_selects_from_country_drop_down(String)"
});
formatter.result({
  "duration": 17515168932,
  "status": "passed"
});
formatter.match({
  "location": "Registration.error_message_shoud_be_thrown()"
});
formatter.result({
  "duration": 199476012,
  "status": "passed"
});
formatter.after({
  "duration": 3957758949,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "TC002-Verify User able to navigate from Account details section to Personal details section when all mandatory inputs are provided and \"do not set limit\" option selected.",
  "description": "",
  "id": "registration;tc002-verify-user-able-to-navigate-from-account-details-section-to-personal-details-section-when-all-mandatory-inputs-are-provided-and-\"do-not-set-limit\"-option-selected.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "user clicks on registration",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User enters \"\u003cemail\u003e\" and \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User selects Do not set limit",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User Agree to terms and conditions",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user click continue",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User able to navigate to Personal details section",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "registration;tc002-verify-user-able-to-navigate-from-account-details-section-to-personal-details-section-when-all-mandatory-inputs-are-provided-and-\"do-not-set-limit\"-option-selected.;",
  "rows": [
    {
      "cells": [
        "email",
        "",
        "username",
        "",
        "password"
      ],
      "line": 24,
      "id": "registration;tc002-verify-user-able-to-navigate-from-account-details-section-to-personal-details-section-when-all-mandatory-inputs-are-provided-and-\"do-not-set-limit\"-option-selected.;;1"
    },
    {
      "cells": [
        "sumit.panpatte@gmail.com",
        "",
        "cdjrmk14",
        "",
        "Abc@1238"
      ],
      "line": 25,
      "id": "registration;tc002-verify-user-able-to-navigate-from-account-details-section-to-personal-details-section-when-all-mandatory-inputs-are-provided-and-\"do-not-set-limit\"-option-selected.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 22382604115,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "TC002-Verify User able to navigate from Account details section to Personal details section when all mandatory inputs are provided and \"do not set limit\" option selected.",
  "description": "",
  "id": "registration;tc002-verify-user-able-to-navigate-from-account-details-section-to-personal-details-section-when-all-mandatory-inputs-are-provided-and-\"do-not-set-limit\"-option-selected.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "user clicks on registration",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User enters \"sumit.panpatte@gmail.com\" and \"cdjrmk14\" and \"Abc@1238\"",
  "matchedColumns": [
    0,
    2,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User selects Do not set limit",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User Agree to terms and conditions",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user click continue",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User able to navigate to Personal details section",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.user_clicks_on_registration()"
});
formatter.result({
  "duration": 1830151497,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sumit.panpatte@gmail.com",
      "offset": 13
    },
    {
      "val": "cdjrmk14",
      "offset": 44
    },
    {
      "val": "Abc@1238",
      "offset": 59
    }
  ],
  "location": "Registration.user_enters_and_and(String,String,String)"
});
formatter.result({
  "duration": 4755654892,
  "status": "passed"
});
formatter.match({
  "location": "Registration.user_selects_Do_not_set_limit()"
});
formatter.result({
  "duration": 501729973,
  "status": "passed"
});
formatter.match({
  "location": "Registration.user_Agree_to_terms_and_conditions()"
});
formatter.result({
  "duration": 506283272,
  "status": "passed"
});
formatter.match({
  "location": "Registration.user_click_continue()"
});
formatter.result({
  "duration": 577442017,
  "status": "passed"
});
formatter.match({
  "location": "Registration.user_able_to_navigate_to_Personal_details_section()"
});
formatter.result({
  "duration": 710936509,
  "status": "passed"
});
formatter.after({
  "duration": 848728247,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 28,
  "name": "TC003-Verify User able to navigate from Account details section to Personal details section when all mandatory inputs are provided and \"set limit\" option selected.",
  "description": "",
  "id": "registration;tc003-verify-user-able-to-navigate-from-account-details-section-to-personal-details-section-when-all-mandatory-inputs-are-provided-and-\"set-limit\"-option-selected.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "user clicks on registration",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "User enters \"\u003cemail\u003e\" and \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "User selects set a limit with \"\u003cType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User Agree to terms and conditions",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user click continue",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User able to navigate to Personal details section",
  "keyword": "Then "
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": "registration;tc003-verify-user-able-to-navigate-from-account-details-section-to-personal-details-section-when-all-mandatory-inputs-are-provided-and-\"set-limit\"-option-selected.;",
  "rows": [
    {
      "cells": [
        "email",
        "",
        "username",
        "",
        "password",
        "",
        "Type"
      ],
      "line": 38,
      "id": "registration;tc003-verify-user-able-to-navigate-from-account-details-section-to-personal-details-section-when-all-mandatory-inputs-are-provided-and-\"set-limit\"-option-selected.;;1"
    },
    {
      "cells": [
        "sumit.panpatte@gmail.com",
        "",
        "cdjrmk14",
        "",
        "Abc@1238",
        "",
        "Deposit"
      ],
      "line": 39,
      "id": "registration;tc003-verify-user-able-to-navigate-from-account-details-section-to-personal-details-section-when-all-mandatory-inputs-are-provided-and-\"set-limit\"-option-selected.;;2"
    },
    {
      "cells": [
        "sumit.panpatte@gmail.com",
        "",
        "cdjrmk14",
        "",
        "Abc@1238",
        "",
        "Loss"
      ],
      "line": 40,
      "id": "registration;tc003-verify-user-able-to-navigate-from-account-details-section-to-personal-details-section-when-all-mandatory-inputs-are-provided-and-\"set-limit\"-option-selected.;;3"
    },
    {
      "cells": [
        "sumit.panpatte@gmail.com",
        "",
        "cdjrmk14",
        "",
        "Abc@1238",
        "",
        "Stakes"
      ],
      "line": 41,
      "id": "registration;tc003-verify-user-able-to-navigate-from-account-details-section-to-personal-details-section-when-all-mandatory-inputs-are-provided-and-\"set-limit\"-option-selected.;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 14722382150,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "TC003-Verify User able to navigate from Account details section to Personal details section when all mandatory inputs are provided and \"set limit\" option selected.",
  "description": "",
  "id": "registration;tc003-verify-user-able-to-navigate-from-account-details-section-to-personal-details-section-when-all-mandatory-inputs-are-provided-and-\"set-limit\"-option-selected.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "user clicks on registration",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "User enters \"sumit.panpatte@gmail.com\" and \"cdjrmk14\" and \"Abc@1238\"",
  "matchedColumns": [
    0,
    2,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "User selects set a limit with \"Deposit\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User Agree to terms and conditions",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user click continue",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User able to navigate to Personal details section",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.user_clicks_on_registration()"
});
formatter.result({
  "duration": 2610603478,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sumit.panpatte@gmail.com",
      "offset": 13
    },
    {
      "val": "cdjrmk14",
      "offset": 44
    },
    {
      "val": "Abc@1238",
      "offset": 59
    }
  ],
  "location": "Registration.user_enters_and_and(String,String,String)"
});
formatter.result({
  "duration": 5365247666,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Deposit",
      "offset": 31
    }
  ],
  "location": "Registration.user_selects_set_a_limit_with(String)"
});
formatter.result({
  "duration": 1582692708,
  "status": "passed"
});
formatter.match({
  "location": "Registration.user_Agree_to_terms_and_conditions()"
});
formatter.result({
  "duration": 321814405,
  "status": "passed"
});
formatter.match({
  "location": "Registration.user_click_continue()"
});
formatter.result({
  "duration": 410218320,
  "status": "passed"
});
formatter.match({
  "location": "Registration.user_able_to_navigate_to_Personal_details_section()"
});
formatter.result({
  "duration": 1148357404,
  "status": "passed"
});
formatter.after({
  "duration": 1909302960,
  "status": "passed"
});
formatter.before({
  "duration": 18216065385,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "TC003-Verify User able to navigate from Account details section to Personal details section when all mandatory inputs are provided and \"set limit\" option selected.",
  "description": "",
  "id": "registration;tc003-verify-user-able-to-navigate-from-account-details-section-to-personal-details-section-when-all-mandatory-inputs-are-provided-and-\"set-limit\"-option-selected.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "user clicks on registration",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "User enters \"sumit.panpatte@gmail.com\" and \"cdjrmk14\" and \"Abc@1238\"",
  "matchedColumns": [
    0,
    2,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "User selects set a limit with \"Loss\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User Agree to terms and conditions",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user click continue",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User able to navigate to Personal details section",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.user_clicks_on_registration()"
});
formatter.result({
  "duration": 479582538,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sumit.panpatte@gmail.com",
      "offset": 13
    },
    {
      "val": "cdjrmk14",
      "offset": 44
    },
    {
      "val": "Abc@1238",
      "offset": 59
    }
  ],
  "location": "Registration.user_enters_and_and(String,String,String)"
});
formatter.result({
  "duration": 6575349843,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Loss",
      "offset": 31
    }
  ],
  "location": "Registration.user_selects_set_a_limit_with(String)"
});
formatter.result({
  "duration": 1592866731,
  "status": "passed"
});
formatter.match({
  "location": "Registration.user_Agree_to_terms_and_conditions()"
});
formatter.result({
  "duration": 330499112,
  "status": "passed"
});
formatter.match({
  "location": "Registration.user_click_continue()"
});
formatter.result({
  "duration": 645783107,
  "status": "passed"
});
formatter.match({
  "location": "Registration.user_able_to_navigate_to_Personal_details_section()"
});
formatter.result({
  "duration": 632286347,
  "status": "passed"
});
formatter.after({
  "duration": 949385934,
  "status": "passed"
});
formatter.before({
  "duration": 18010039515,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "TC003-Verify User able to navigate from Account details section to Personal details section when all mandatory inputs are provided and \"set limit\" option selected.",
  "description": "",
  "id": "registration;tc003-verify-user-able-to-navigate-from-account-details-section-to-personal-details-section-when-all-mandatory-inputs-are-provided-and-\"set-limit\"-option-selected.;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "user clicks on registration",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "User enters \"sumit.panpatte@gmail.com\" and \"cdjrmk14\" and \"Abc@1238\"",
  "matchedColumns": [
    0,
    2,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "User selects set a limit with \"Stakes\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User Agree to terms and conditions",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user click continue",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User able to navigate to Personal details section",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.user_clicks_on_registration()"
});
formatter.result({
  "duration": 2051124010,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sumit.panpatte@gmail.com",
      "offset": 13
    },
    {
      "val": "cdjrmk14",
      "offset": 44
    },
    {
      "val": "Abc@1238",
      "offset": 59
    }
  ],
  "location": "Registration.user_enters_and_and(String,String,String)"
});
formatter.result({
  "duration": 4258494424,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Stakes",
      "offset": 31
    }
  ],
  "location": "Registration.user_selects_set_a_limit_with(String)"
});
formatter.result({
  "duration": 1675229651,
  "status": "passed"
});
formatter.match({
  "location": "Registration.user_Agree_to_terms_and_conditions()"
});
formatter.result({
  "duration": 561130843,
  "status": "passed"
});
formatter.match({
  "location": "Registration.user_click_continue()"
});
formatter.result({
  "duration": 695691679,
  "status": "passed"
});
formatter.match({
  "location": "Registration.user_able_to_navigate_to_Personal_details_section()"
});
formatter.result({
  "duration": 734323690,
  "status": "passed"
});
formatter.after({
  "duration": 882112269,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 44,
  "name": "TC004-Verify User not allowed to navigate without agreeing to terms and condition.",
  "description": "",
  "id": "registration;tc004-verify-user-not-allowed-to-navigate-without-agreeing-to-terms-and-condition.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 46,
  "name": "user clicks on registration",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "User enters \"\u003cemail\u003e\" and \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "User selects Do not set limit",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "user click continue",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "User is still on Account details section",
  "keyword": "Then "
});
formatter.scenarioOutline({
  "line": 52,
  "name": "TC005-Verify User is not allowed to navigate further in application with either of invalid emailid, invalid username or invalid password.",
  "description": "",
  "id": "registration;tc005-verify-user-is-not-allowed-to-navigate-further-in-application-with-either-of-invalid-emailid,-invalid-username-or-invalid-password.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 54,
  "name": "user clicks on registration",
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "User enters \"\u003cinvalidEmail\u003e\" and \"\u003cinvalidUsername\u003e\" and \"\u003cInvalidPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "User selects Do not set limit",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "User Agree to terms and conditions",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "user click continue",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User is still on Account details section",
  "keyword": "Then "
});
formatter.examples({
  "line": 61,
  "name": "",
  "description": "",
  "id": "registration;tc005-verify-user-is-not-allowed-to-navigate-further-in-application-with-either-of-invalid-emailid,-invalid-username-or-invalid-password.;",
  "rows": [
    {
      "cells": [
        "invalidEmail",
        "",
        "invalidUsername",
        "",
        "InvalidPassword"
      ],
      "line": 62,
      "id": "registration;tc005-verify-user-is-not-allowed-to-navigate-further-in-application-with-either-of-invalid-emailid,-invalid-username-or-invalid-password.;;1"
    },
    {
      "cells": [
        "sumit.panpatte",
        "",
        "cdjrmk14",
        "",
        "Abc@1238"
      ],
      "line": 63,
      "id": "registration;tc005-verify-user-is-not-allowed-to-navigate-further-in-application-with-either-of-invalid-emailid,-invalid-username-or-invalid-password.;;2"
    },
    {
      "cells": [
        "sumit.panpatte@gmail.com",
        "",
        "cdj",
        "",
        "Abc@1238"
      ],
      "line": 64,
      "id": "registration;tc005-verify-user-is-not-allowed-to-navigate-further-in-application-with-either-of-invalid-emailid,-invalid-username-or-invalid-password.;;3"
    },
    {
      "cells": [
        "sumit.panpatte@gmail.com",
        "",
        "cdjeks",
        "",
        "Abc@1"
      ],
      "line": 65,
      "id": "registration;tc005-verify-user-is-not-allowed-to-navigate-further-in-application-with-either-of-invalid-emailid,-invalid-username-or-invalid-password.;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 18087407795,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "TC005-Verify User is not allowed to navigate further in application with either of invalid emailid, invalid username or invalid password.",
  "description": "",
  "id": "registration;tc005-verify-user-is-not-allowed-to-navigate-further-in-application-with-either-of-invalid-emailid,-invalid-username-or-invalid-password.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 54,
  "name": "user clicks on registration",
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "User enters \"sumit.panpatte\" and \"cdjrmk14\" and \"Abc@1238\"",
  "matchedColumns": [
    0,
    2,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "User selects Do not set limit",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "User Agree to terms and conditions",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "user click continue",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User is still on Account details section",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.user_clicks_on_registration()"
});
formatter.result({
  "duration": 543641505,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sumit.panpatte",
      "offset": 13
    },
    {
      "val": "cdjrmk14",
      "offset": 34
    },
    {
      "val": "Abc@1238",
      "offset": 49
    }
  ],
  "location": "Registration.user_enters_and_and(String,String,String)"
});
formatter.result({
  "duration": 5840761998,
  "status": "passed"
});
formatter.match({
  "location": "Registration.user_selects_Do_not_set_limit()"
});
formatter.result({
  "duration": 444826962,
  "status": "passed"
});
formatter.match({
  "location": "Registration.user_Agree_to_terms_and_conditions()"
});
formatter.result({
  "duration": 325421825,
  "status": "passed"
});
formatter.match({
  "location": "Registration.user_click_continue()"
});
formatter.result({
  "duration": 446276844,
  "status": "passed"
});
formatter.match({
  "location": "Registration.user_is_still_on_Account_details_section()"
});
formatter.result({
  "duration": 172208612,
  "status": "passed"
});
formatter.after({
  "duration": 1011854028,
  "status": "passed"
});
formatter.before({
  "duration": 20985121962,
  "status": "passed"
});
formatter.scenario({
  "line": 64,
  "name": "TC005-Verify User is not allowed to navigate further in application with either of invalid emailid, invalid username or invalid password.",
  "description": "",
  "id": "registration;tc005-verify-user-is-not-allowed-to-navigate-further-in-application-with-either-of-invalid-emailid,-invalid-username-or-invalid-password.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 54,
  "name": "user clicks on registration",
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "User enters \"sumit.panpatte@gmail.com\" and \"cdj\" and \"Abc@1238\"",
  "matchedColumns": [
    0,
    2,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "User selects Do not set limit",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "User Agree to terms and conditions",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "user click continue",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User is still on Account details section",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.user_clicks_on_registration()"
});
formatter.result({
  "duration": 921337413,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sumit.panpatte@gmail.com",
      "offset": 13
    },
    {
      "val": "cdj",
      "offset": 44
    },
    {
      "val": "Abc@1238",
      "offset": 54
    }
  ],
  "location": "Registration.user_enters_and_and(String,String,String)"
});
formatter.result({
  "duration": 5275501909,
  "status": "passed"
});
formatter.match({
  "location": "Registration.user_selects_Do_not_set_limit()"
});
formatter.result({
  "duration": 553405522,
  "status": "passed"
});
formatter.match({
  "location": "Registration.user_Agree_to_terms_and_conditions()"
});
formatter.result({
  "duration": 412731845,
  "status": "passed"
});
formatter.match({
  "location": "Registration.user_click_continue()"
});
formatter.result({
  "duration": 294765244,
  "status": "passed"
});
formatter.match({
  "location": "Registration.user_is_still_on_Account_details_section()"
});
formatter.result({
  "duration": 56274764,
  "status": "passed"
});
formatter.after({
  "duration": 857741393,
  "status": "passed"
});
formatter.before({
  "duration": 20445074371,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "TC005-Verify User is not allowed to navigate further in application with either of invalid emailid, invalid username or invalid password.",
  "description": "",
  "id": "registration;tc005-verify-user-is-not-allowed-to-navigate-further-in-application-with-either-of-invalid-emailid,-invalid-username-or-invalid-password.;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 54,
  "name": "user clicks on registration",
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "User enters \"sumit.panpatte@gmail.com\" and \"cdjeks\" and \"Abc@1\"",
  "matchedColumns": [
    0,
    2,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "User selects Do not set limit",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "User Agree to terms and conditions",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "user click continue",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User is still on Account details section",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.user_clicks_on_registration()"
});
formatter.result({
  "duration": 748347680,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sumit.panpatte@gmail.com",
      "offset": 13
    },
    {
      "val": "cdjeks",
      "offset": 44
    },
    {
      "val": "Abc@1",
      "offset": 57
    }
  ],
  "location": "Registration.user_enters_and_and(String,String,String)"
});
formatter.result({
  "duration": 5477548165,
  "status": "passed"
});
formatter.match({
  "location": "Registration.user_selects_Do_not_set_limit()"
});
formatter.result({
  "duration": 426648336,
  "status": "passed"
});
formatter.match({
  "location": "Registration.user_Agree_to_terms_and_conditions()"
});
formatter.result({
  "duration": 361009840,
  "status": "passed"
});
formatter.match({
  "location": "Registration.user_click_continue()"
});
formatter.result({
  "duration": 285753179,
  "status": "passed"
});
formatter.match({
  "location": "Registration.user_is_still_on_Account_details_section()"
});
formatter.result({
  "duration": 49072892,
  "status": "passed"
});
formatter.after({
  "duration": 957064258,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 68,
  "name": "TC006-Verify User is not allowed to navigate further in application with either of invalid emailid, invalid username or invalid password.",
  "description": "",
  "id": "registration;tc006-verify-user-is-not-allowed-to-navigate-further-in-application-with-either-of-invalid-emailid,-invalid-username-or-invalid-password.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 70,
  "name": "user clicks on registration",
  "keyword": "Given "
});
formatter.step({
  "line": 71,
  "name": "User enters \"\u003cEmail\u003e\" and \"\u003cExistingUsername\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "User selects Do not set limit",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "User Agree to terms and conditions",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "user click continue",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "User is still on Account details section",
  "keyword": "Then "
});
formatter.examples({
  "line": 77,
  "name": "",
  "description": "",
  "id": "registration;tc006-verify-user-is-not-allowed-to-navigate-further-in-application-with-either-of-invalid-emailid,-invalid-username-or-invalid-password.;",
  "rows": [
    {
      "cells": [
        "Email",
        "",
        "ExistingUsername",
        "",
        "Password"
      ],
      "line": 78,
      "id": "registration;tc006-verify-user-is-not-allowed-to-navigate-further-in-application-with-either-of-invalid-emailid,-invalid-username-or-invalid-password.;;1"
    },
    {
      "cells": [
        "sumit.panpatte@gmail.com",
        "",
        "abcdef",
        "",
        "Abc@1238"
      ],
      "line": 79,
      "id": "registration;tc006-verify-user-is-not-allowed-to-navigate-further-in-application-with-either-of-invalid-emailid,-invalid-username-or-invalid-password.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 19922906138,
  "status": "passed"
});
formatter.scenario({
  "line": 79,
  "name": "TC006-Verify User is not allowed to navigate further in application with either of invalid emailid, invalid username or invalid password.",
  "description": "",
  "id": "registration;tc006-verify-user-is-not-allowed-to-navigate-further-in-application-with-either-of-invalid-emailid,-invalid-username-or-invalid-password.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 70,
  "name": "user clicks on registration",
  "keyword": "Given "
});
formatter.step({
  "line": 71,
  "name": "User enters \"sumit.panpatte@gmail.com\" and \"abcdef\" and \"Abc@1238\"",
  "matchedColumns": [
    0,
    2,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "User selects Do not set limit",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "User Agree to terms and conditions",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "user click continue",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "User is still on Account details section",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.user_clicks_on_registration()"
});
formatter.result({
  "duration": 1574206791,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sumit.panpatte@gmail.com",
      "offset": 13
    },
    {
      "val": "abcdef",
      "offset": 44
    },
    {
      "val": "Abc@1238",
      "offset": 57
    }
  ],
  "location": "Registration.user_enters_and_and(String,String,String)"
});
formatter.result({
  "duration": 5640555644,
  "status": "passed"
});
formatter.match({
  "location": "Registration.user_selects_Do_not_set_limit()"
});
formatter.result({
  "duration": 442101140,
  "status": "passed"
});
formatter.match({
  "location": "Registration.user_Agree_to_terms_and_conditions()"
});
formatter.result({
  "duration": 331365585,
  "status": "passed"
});
formatter.match({
  "location": "Registration.user_click_continue()"
});
formatter.result({
  "duration": 273457272,
  "status": "passed"
});
formatter.match({
  "location": "Registration.user_is_still_on_Account_details_section()"
});
formatter.result({
  "duration": 39500104,
  "status": "passed"
});
formatter.after({
  "duration": 1145143246,
  "status": "passed"
});
formatter.before({
  "duration": 20237403069,
  "status": "passed"
});
formatter.scenario({
  "line": 81,
  "name": "TC007-Verify terms and condition link is working.",
  "description": "",
  "id": "registration;tc007-verify-terms-and-condition-link-is-working.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 83,
  "name": "user clicks on registration",
  "keyword": "Given "
});
formatter.step({
  "line": 84,
  "name": "User clicks on terms and condition link",
  "keyword": "When "
});
formatter.step({
  "line": 85,
  "name": "Terms and condition link should open",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration.user_clicks_on_registration()"
});
formatter.result({
  "duration": 651531316,
  "status": "passed"
});
formatter.match({
  "location": "Registration.user_clicks_on_terms_and_condition_link()"
});
formatter.result({
  "duration": 3353595129,
  "status": "passed"
});
formatter.match({
  "location": "Registration.terms_and_condition_link_should_open()"
});
formatter.result({
  "duration": 12472551,
  "status": "passed"
});
formatter.after({
  "duration": 1412622725,
  "status": "passed"
});
});