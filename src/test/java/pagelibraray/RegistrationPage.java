package pagelibraray;

import java.util.List;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import utility.Testbase;

public class RegistrationPage extends Testbase {

	//static Logger log = Logger.getLogger(RegistrationPage.class.getName());

	@FindBy(how = How.XPATH, using = ".//label[@class='ng-binding']")
	public WebElement dropDownCountry;

	@FindBy(how = How.XPATH, using = ".//*[@id='registration_currency']")
	public WebElement dropDownCurrency;

	@FindBy(how = How.XPATH, using = ".//*[@id='registration_timezone']")
	public WebElement dropDownTimezon;

	@FindBy(how = How.XPATH, using = ".//*[@id='registration_email']")
	public WebElement inputEmail;

	@FindBy(how = How.XPATH, using = ".//*[@id='registration_username']")
	public WebElement inputUsername;

	@FindBy(how = How.XPATH, using = ".//*[@id='registration_pass']")
	public WebElement inputPassword;

	@FindBy(how = How.XPATH, using = ".//*[@id='registration_pass_confirm']")
	public WebElement inputConfirmPassword;

	@FindBy(how = How.XPATH, using = ".//*[@translate='label_dont_set_limit_now']")
	public WebElement radioDontSetLimit;

	@FindBy(how = How.XPATH, using = ".//*[text()='Set a limit']")
	public WebElement radioSetLimit;

	@FindBy(how = How.XPATH, using = ".//span[@translate='txt_confirm_legal_age_and_terms']")
	public WebElement radioTermsAndPolicy;

	@FindBy(how = How.XPATH, using = ".//*[text()='Registration not allowed']")
	public WebElement errorMesg;

	@FindBy(how = How.XPATH, using = ".//*[text()='Continue']")
	public WebElement buttonContinue;

	@FindBy(how = How.XPATH, using = ".//*[@id='registration_fname']")
	public WebElement inputFirstName;

	@FindBy(how = How.XPATH, using = ".//*[@translate='label_limit_type_LOS']")
	public WebElement radioButtonLoss;

	@FindBy(how = How.XPATH, using = ".//*[@translate='label_limit_type_DEP']")
	public WebElement radioButtonDeposite;

	@FindBy(how = How.XPATH, using = ".//*[@translate='label_limit_type_STK']")
	public WebElement radioButtonSTK;

	@FindBy(how = How.XPATH, using = ".//*[@id='limit_period']")
	public WebElement dropDownPeriod;

	@FindBy(how = How.XPATH, using = ".//*[@id='limit_amount']")
	public WebElement amount;
	
	@FindBy(how = How.XPATH, using = "//*[text ()='Terms and Conditions']")
	public WebElement termsAndCondition;

	public RegistrationPage(WebDriver driver) {

		this.driver = driver;
		PageFactory.initElements(driver, this);

	}

	public void selectCountry(String country) {

		dropDownCountry.click();
	
		
		
		try {
			Thread.sleep(10000);
		} catch (InterruptedException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}

		List<WebElement> c = driver.findElements(By.xpath(".//ul[@class='ng-scope']/li"));
		

		for (int i = 0; i < c.size(); i++) {
			WebElement e = c.get(i);
			String innerHtml = e.getAttribute("innerHTML");
			
			if (innerHtml.contains(country)) {
				e.click();
				

			}
		}

	}

	public void setEmail(String email) {
		inputEmail.sendKeys(email);
    
	}

	public void setUsername(String username) {
		inputUsername.sendKeys(username);
	}

	public void setPassword(String password) {
		inputPassword.sendKeys(password);
	}

	public void setInputConfirmPassword(String confirmPassword) {
		inputConfirmPassword.sendKeys(confirmPassword);
	}

	public void setRadioDontSetLimit() {
		radioDontSetLimit.click();
	}

	public void setRadioSetLimit() {
		radioSetLimit.click();

	}

	public void setTypePeriodAmount(String type) {

		if (type.equalsIgnoreCase("Deposit")) {
			radioButtonDeposite.click();

		} else if (type.equalsIgnoreCase("Loss")) {
			radioButtonLoss.click();

		} else {
			radioButtonSTK.click();

		}

		amount.sendKeys("10000");

		Select s = new Select(dropDownPeriod);
		s.selectByIndex(2);

	}

	public void setRadioTermsAndPolicy() {
		radioTermsAndPolicy.click();
	}

	public void clickContinue() {
		buttonContinue.click();
	}
	
	public void clickTermsAndCondition() {
     termsAndCondition.click();
	}

}
