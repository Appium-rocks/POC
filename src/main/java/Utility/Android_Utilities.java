package Utility;

import java.net.URL;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.DesiredCapabilities;

import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.remote.AndroidMobileCapabilityType;
import io.appium.java_client.remote.MobileCapabilityType;

public class Android_Utilities {
public void launchApp(String sAppName) throws Exception{
		
     String accessKey = "eyJhbGciOiJIUzI1NiJ9.eyJ4cC51Ijo5NTAzNTAwLCJ4cC5wIjo5NTAzNDk5LCJ4cC5tIjoxNjAyMjY4OTE4OTM1LCJleHAiOjE5MTc2MjkyMzgsImlzcyI6ImNvbS5leHBlcml0ZXN0In0.D0cGqLKBZUj0fq4OpPlkdROZX-CEd7o0YnTIyGQ33jo";
     DesiredCapabilities dc = new DesiredCapabilities();
     dc.setCapability("testName", "Quick Start Android Native Demo");
     dc.setCapability("accessKey", accessKey);
     dc.setCapability("deviceQuery", "@os='android' and @serialnumber='ZY322RJP7V'");
     dc.setCapability(MobileCapabilityType.APP, "cloud:com.experitest.ExperiBank/.LoginActivity");
     dc.setCapability(AndroidMobileCapabilityType.APP_PACKAGE, "com.experitest.ExperiBank");
     dc.setCapability(AndroidMobileCapabilityType.APP_ACTIVITY, ".LoginActivity");
     TestBase.driver = new AndroidDriver<WebElement>(new URL("https://cloud.seetest.io/wd/hub"), dc);
 

		}
}

