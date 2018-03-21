package utility;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;

public class Testbase {

	public WebDriver driver;

	public void LaunchBaseURL() {

		ConfigReader.loadConfig();
		LaunchBrowser launchbrowser = new LaunchBrowser();
		System.out.print(ConfigReader.readConfig("browser"));
		driver = launchbrowser.startBrowser(ConfigReader.readConfig("browser"));
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.get(ConfigReader.readConfig("baseurl"));

	}

	public void cleanUp() {

		driver.quit();
	}

}
