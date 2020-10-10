package Utility;

import org.openqa.selenium.WebElement;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.BeforeSuite;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import io.appium.java_client.android.AndroidDriver;

public class TestBase {
	
	public static AndroidDriver<WebElement> driver=null;
	public static Android_Utilities oU_Android = new Android_Utilities();
	public static CommonUtilities oU_Comm = new CommonUtilities();
	
	
	@BeforeSuite
	public void TriggerinBeforeSuiteDependency() throws Exception{
		oU_Comm.loadPropertyFiles(System.getProperty("user.dir")+"/conf.properties");
		oU_Android.launchApp(System.getProperty("appNameToLaunch"));
	}
	
	public void closeApp() throws Exception{
		driver.quit();
	}
}
