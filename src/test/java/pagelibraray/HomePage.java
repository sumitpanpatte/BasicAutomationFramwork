package pagelibraray;

import org.apache.log4j.Logger;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import utility.Testbase;

public class HomePage extends Testbase {

	
	static Logger log = Logger.getLogger(HomePage.class.getName());
	
	@FindBy(how = How.XPATH, using = ".//*[@id='m-accWidget__btnRegister']")
	public WebElement link_Registration ;
	
	
	public HomePage(WebDriver driver) {

		this.driver = driver;
		PageFactory.initElements(driver, this);

	}
	
	
	public void clickRgistrationLink() {
		log.info("********On Home page***********");
		
		link_Registration.click();
		

	}
}
