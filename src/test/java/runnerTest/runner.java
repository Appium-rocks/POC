package runnerTest;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features=".//Features/app.feature", 
glue="stepDefinition",
	dryRun=false,
	monochrome=true,
	plugin= {"pretty","html:test-output"})
public class runner extends AbstractTestNGCucumberTests {


}
