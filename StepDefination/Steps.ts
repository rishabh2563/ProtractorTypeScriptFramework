import { Given, When, Then } from "cucumber";
import { Calculator } from "../PajeObjects/Calculator";
import { angularHomePage } from "../PajeObjects/AngularPage"
import {browser} from "protractor";
import chai from "chai";
var expect = chai.expect;
let calc=new Calculator();
let ap=new angularHomePage();

  Given('Navigate to the {string} site',  async(string)=> {
    if(string=="Calc"){
      await browser.get("http://juliemr.github.io/protractor-demo/");
    }
    else if(string=="AngularJs"){
      await  browser.get("https://angularjs.org/");
    }
  });

  When('when i add two numbers {string} and {string}', async(string, string2)=> {
    // Write code here that turns the phrase above into concrete actions
    await calc.firsteditbox.sendKeys(string);
    await calc.SecondEditBox.sendKeys(string2)
  });

  When('User clicks on Header Link', async()=>{
    await ap.angularLink.click();
  });

  When('User is navigated to Angular webPage', function () {
    console.log("Navigated to New Page");
  });
  
  Then('the result outcome is {string}', async(string)=> {
    // Write code here that turns the phrase above into concrete actions
    await calc.ClickButton.click();
    await calc.getresults.getText()
     .then((text)=>{
      expect(text).to.equal(string);
     })
  });
  Then('User Enters {string} in the SearchBox', async(string)=> {
    await browser.sleep(3000);
    await ap.seachbox.sendKeys(string);
  });
  
  