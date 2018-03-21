package utility;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

public class LaunchBrowser extends Testbase {

	

	public WebDriver startBrowser(String browserName) {

		if (browserName.toLowerCase().contains("chrome")) {
			
			System.setProperty("webdriver.chrome.driver", ".\\src\\test\\resources\\chromedriver.exe");
			driver = new ChromeDriver();

			driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		} else if (browserName.toLowerCase().contains("firefox")) {
			
			/*
			 * System.setProperty("webdriver.firefox.bin",ConfigReader.
			 * readConfig("firefoxBrowserPath")); driver = new FirefoxDriver();
			 * driver.manage().timeouts().implicitlyWait(60,TimeUnit.SECONDS);
			 * System.out.print(ConfigReader.readConfig("geckodriverpath"));
			 * System.setProperty("webdriver.firefox.bin",ConfigReader.
			 * readConfig("firefoxBrowserPath"));
			 */

			System.setProperty("webdriver.gecko.driver", ".\\src\\test\\resources\\geckodriver.exe");
			driver = new FirefoxDriver();
			driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);

		} else {
		
			System.setProperty("webdriver.ie.driver", ConfigReader.readConfig("ieBrowserPath"));
			driver = new InternetExplorerDriver();
			driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
		}

		return driver;

	}

}
