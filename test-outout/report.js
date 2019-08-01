$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/suraj.patil/workspace/FreeCrmBDD/src/main/java/Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title is a login Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters User name and password",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User is on the signup page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginstepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 5527565466,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.title_of_login_page_free_crm()"
});
formatter.result({
  "duration": 11765877,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.user_enters_User_name_and_password()"
});
formatter.result({
  "duration": 10008651489,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.User_is_on_signup_page()"
});
formatter.result({
  "duration": 7672451,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cCogmento CR[]\u003e but was:\u003cCogmento CR[M]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat stepDefinitions.LoginstepDefinition.User_is_on_signup_page(LoginstepDefinition.java:51)\r\n\tat ✽.Then User is on the signup page(C:/Users/suraj.patil/workspace/FreeCrmBDD/src/main/java/Features/login.feature:8)\r\n",
  "status": "failed"
});
});