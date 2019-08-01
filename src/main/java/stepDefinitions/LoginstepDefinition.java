package stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class LoginstepDefinition {

	WebDriver driver;
	
	@Given("^User is already on login page$")
	public void user_already_on_login_page()
	{
		System.setProperty("webdriver.chrome.driver","C:\\Users\\suraj.patil\\workspace\\FreeCrmBDD\\browserexe\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("https://www.freecrm.com");
	}
	
	@When("^title is a login Free CRM$") 
	public void title_of_login_page_free_crm()
	{
		String title=driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("Free CRM software for any Business", title);
		
	}
	
	@Then("^User enters User name and password$")
	public void user_enters_User_name_and_password() 
	{
		//WebElement signup = 
				driver.findElement(By.xpath("/html/body/div[1]/main/section[1]/a")).click();
		//JavascriptExecutor js=(JavascriptExecutor)driver;
		//js.executeScript("argument[0].click();",signup);  
	
	}
	
	@Then ("^User is on the signup page$")
	public void User_is_on_signup_page()
	{
		String reg=driver.getTitle();
		System.out.println(reg);
		Assert.assertEquals("Cogmento CR", reg);
		
	}
}