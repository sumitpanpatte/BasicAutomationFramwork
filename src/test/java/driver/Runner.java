package driver;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

/*
 * @RunWith(ExtendedCucumber.class)
 * 
 * @ExtendedCucumberOptions(jsonReport = "target/cucumber.json", retryCount = 3,
 * detailedReport = true, detailedAggregatedReport = true, overviewReport =
 * false, toPDF = false, outputFolder = "target")
 * 
 */
@CucumberOptions(features = "Features", glue = { "stepdefination" },

		plugin = { "html:./target/cucumber-html-report", "json:./target/cucumber-json-report.json",
				"pretty:target/cucumber-pretty.txt", "usage:target/cucumber-usage.json",
				"junit:target/cucumber-results.xml"

		}
 //,dryRun = true

)

public class Runner {

}
