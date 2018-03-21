package stepdefination;


import java.util.Set;

import org.apache.log4j.Logger;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import pagelibraray.HomePage;
import pagelibraray.RegistrationPage;

import utility.Testbase;

public class Registration extends Testbase {

	static Logger log = Logger.getLogger(Registration.class.getName());
	HomePage h ;
	RegistrationPage r;

	@Before
	public void beforeScenario() {

		LaunchBaseURL();
		h = new HomePage(driver);
		r = new RegistrationPage(driver);
		

	}

	@After
	public void afterScenario() {
		cleanUp();

	}

	@Given("^user clicks on registration$")
	public void user_clicks_on_registration() throws Throwable {
		// Write code here that turns the phrase above into concrete actions

		//HomePage h = new HomePage(driver);
		h.clickRgistrationLink();
		log.info("On Home page: Clicked on Registration link");

	}

	@When("^User selects \"([^\"]*)\" from country drop down$")
	public void user_selects_from_country_drop_down(String country) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		//RegistrationPage r = new RegistrationPage(driver);
		r.selectCountry(country);
		log.info("On Account details section of Registration page : selected country form drop is" + country);

	}

	@When("^User enters \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and_and(String email, String username, String password) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		//RegistrationPage r = new RegistrationPage(driver);
		r.setEmail(email);
		log.info("On Account details section of Registration page: entered email is" + email);
		r.setUsername(username);
		log.info("On Account details section of Registration page: entered username is" + username);
		r.setPassword(password);
		log.info("On Account details section of Registration page: entered password is" + password);
		r.setInputConfirmPassword(password);
		log.info("On Account details section of Registration page: entered confirmed password is" + password);

	}

	@When("^User selects Do not set limit$")
	public void user_selects_Do_not_set_limit() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		//RegistrationPage r = new RegistrationPage(driver);
		r.radioDontSetLimit.click();
		log.info("On Account details section of Registration page: Do not set limit radio button selected");

	}

	@When("^User selects set a limit with \"([^\"]*)\"$")
	public void user_selects_set_a_limit_with(String type) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		//RegistrationPage r = new RegistrationPage(driver);
		r.setRadioSetLimit();
		log.info("On Account details section of Registration page: set a limit radio button selected");
		r.setTypePeriodAmount(type);
		log.info("On Account details section of Registration page: under set a limit : amount , period and Type is select as 1000, 24 Hours"+ type);
	}

	@When("^User Agree to terms and conditions$")
	public void user_Agree_to_terms_and_conditions() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		//RegistrationPage r = new RegistrationPage(driver);
		r.radioTermsAndPolicy.click();
		log.info("On Account details section of Registration page: clicked on I agree to terms and condition");

	}

	@When("^user click continue$")
	public void user_click_continue() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		//RegistrationPage r = new RegistrationPage(driver);
		r.clickContinue();
		log.info("On Account details section of Registration page: clicked on continue button");
	}
	@When("^User clicks on terms and condition link$")
	public void user_clicks_on_terms_and_condition_link() throws Throwable {
	   
		//RegistrationPage r = new RegistrationPage(driver);
		r.clickTermsAndCondition();
		log.info("On Account details section of Registration page: clicked on TermsAndCondition link");
	   
	}

	@Then("^User able to navigate to Personal details section$")
	public void user_able_to_navigate_to_Personal_details_section() throws Throwable {
		// Write code here that turns the phrase above into concrete actions

		//RegistrationPage r = new RegistrationPage(driver);

		Assert.assertTrue(r.inputFirstName.isDisplayed());
		
		log.info("Verificarion point: From account details section, User able to navigate to personal details section");

	}

	@Then("^Error message shoud be thrown$")
	public void error_message_shoud_be_thrown() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		//RegistrationPage r = new RegistrationPage(driver);

		Assert.assertTrue(r.errorMesg.isDisplayed());
		
		log.info("Verificarion point: Error mesg is diapled for countries for which registration is not allowed");
		
	}

	@Then("^user not allowed to proceed$")
	public void user_not_allowed_to_proceed() throws Throwable {
		// Write code here that turns the phrase above into concrete actions

	}

	@Then("^User is still on Account details section$")
	public void user_is_still_on_Account_details_section() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		//RegistrationPage r = new RegistrationPage(driver);

		Assert.assertTrue(r.buttonContinue.isDisplayed());
		log.info("Verificarion point: User not able to proceed further and still in account details section due to some manadatory input missing");

	}
	
	
	

	@Then("^Terms and condition link should open$")
	public void terms_and_condition_link_should_open() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		
		Set<String>s1=driver.getWindowHandles();
		Assert.assertTrue(s1.size() > 0);	
		
		log.info("Verificarion point: New window opened");
	}

}
