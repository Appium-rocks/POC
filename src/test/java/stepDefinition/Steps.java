package stepDefinition;

import io.appium.java_client.TouchAction;
import io.appium.java_client.android.AndroidElement;
import org.openqa.selenium.By;
import org.openqa.selenium.ScreenOrientation;

import Utility.TestBase;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.HasInputDevices;
import org.openqa.selenium.interactions.touch.TouchActions;

public class Steps extends TestBase {
	
	static int counter=1;
	
	@Given("^i launched the app$")
	public void i_launched_the_app() throws Throwable {
		if(counter==1) {
	    TriggerinBeforeSuiteDependency();
	    counter++;
		}
		
	    
	}

	@When("^i enter the user name as  \"([^\"]*)\"$")
	public void i_enter_the_user_name_as(String userName) throws Throwable {
		driver.rotate(ScreenOrientation.PORTRAIT);
        driver.findElement(By.xpath("//*[@id='usernameTextField']")).sendKeys(userName);
        driver.hideKeyboard();
	}

	@When("^i enter the password as \"([^\"]*)\"$")
	public void i_enter_the_password_as(String password) throws Throwable {
		 driver.findElement(By.xpath("//*[@id='passwordTextField']")).sendKeys(password);
	    
	}

	@Then("^i am logged in$")
	public void i_am_logged_in() throws Throwable {
		driver.findElement(By.xpath("//*[@id='loginButton']")).click();
	}
	
	@When("^i click on Make Payment$")
	public void i_click_on_Make_Payment() throws Throwable {
		driver.findElement(By.xpath("//*[@id='makePaymentButton']")).click();
	}

	
	
	@When("^i enter \"([^\"]*)\", \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
	public void i_enter(String phone, String name, String amount, String country) throws Throwable {
		driver.findElement(By.xpath("//*[@id='phoneTextField']")).sendKeys(phone);
        driver.findElement(By.xpath("//*[@id='nameTextField']")).sendKeys(name);
        driver.findElement(By.xpath("//*[@id='amountTextField']")).sendKeys(amount);
        driver.findElement(By.xpath("//*[@id='countryButton']")).click();
        driver.findElement(By.xpath("//*[@text='Switzerland']")).click();
	}
	@When("^i hit Send Payment$")
	public void i_hit_Send_Payment() throws Throwable {
		driver.findElement(By.xpath("//*[@id='sendPaymentButton']")).click();
	}

	@Then("^i am able to make a payment$")
	public void i_am_able_to_make_a_payment() throws Throwable {
		driver.findElement(By.xpath("//*[@text='Yes']")).click();
	}
	@When("^i click on Mortgage Request$")
	public void i_click_on_Mortgage_Request() throws Throwable {

		Thread.sleep(1000);
		driver.findElement(By.xpath("//*[@id='mortageRequestButton']")).click();
	}

	@When("^i fill out all the details$")
	public void i_fill_out_all_the_details() throws Throwable {


		driver.findElement(By.xpath("//*[@id='nameTextField']")).sendKeys("Sridhar");
		driver.findElement(By.xpath("//*[@id='lastNameTextField']")).sendKeys("Yerasi");
		driver.findElement(By.xpath("//*[@id='ageTextField']")).sendKeys("35");
		driver.findElement(By.xpath("//*[@id='addressOneTextField']")).sendKeys("801 Locust PL NE");
		driver.findElement(By.xpath("//*[@id='addressTwoTextField']")).sendKeys("Albuquerque NM");

		driver.findElement(By.xpath("//*[@id='countryButton']")).click();
		driver.findElement(By.xpath("//*[@text='India']")).click();

		driver.findElement(By.xpath("//*[@id='nextButton']")).click();



	}

	@Then("^i am able to make a loan request$")
	public void i_am_able_to_make_a_loan_request() throws Throwable {

		driver.findElement(By.xpath("//*[@text='Car']")).click();

		driver.findElement(By.xpath("//*[@text='5']")).click();


		String uiSelector = "new UiSelector().textMatches(\"" + "Private Job"
				+ "\")";
		String command = "new UiScrollable(new UiSelector().scrollable(true).instance(0)).scrollIntoView("
				+ uiSelector + ");";
		driver.findElementByAndroidUIAutomator(command);
		driver.findElement(By.xpath("//*[@text='Private Job']")).click();


		String uiSelector1 = "new UiSelector().textMatches(\"" + "2,500,000"
				+ "\")";
		String command1 = "new UiScrollable(new UiSelector().scrollable(true).instance(0)).scrollIntoView("
				+ uiSelector1 + ");";
		driver.findElementByAndroidUIAutomator(command1);
		driver.findElement(By.xpath("//*[@text='2,500,000']")).click();
		Thread.sleep(1000);
		driver.findElement(By.xpath("//*[@id='saveButton']")).click();
		Thread.sleep(1000);

	}

	@Then("^i am logging off$")
	public void i_am_logging_off() throws Throwable {
	  driver.findElement(By.xpath("//*[@text='Logout']")).click();
	  
	}

	@When("^i click on Expense Report$")
	public void i_click_on_Expense_Report() throws Throwable {
		driver.findElement(By.xpath("//*[@text='Expense Report']")).click();
	}

	@When("^i click on add Expense$")
	public void i_click_on_add_Expense() throws Throwable {
		driver.findElement(By.xpath("//*[@text='Add']")).click();
	}

	@Then("^i am able to add the expense$")
	public void i_am_able_to_add_the_expense() throws Throwable {
		String expense=driver.findElement(By.xpath("//*[@text='Expense : 2']")).getText();
		Assert.assertEquals("Expense : 2", expense );
		driver.findElement(By.xpath("//*[@text='Back']")).click();

	@Then("^i close the application$")
	public void i_close_the_application() throws Throwable {
		closeApp();
	    	}

}
