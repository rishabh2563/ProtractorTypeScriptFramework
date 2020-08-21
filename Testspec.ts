import {browser} from "protractor";
import {element,by} from "protractor";
import { Calculator } from "./PajeObjects/Calculator";
import { angularHomePage } from "./PajeObjects/AngularPage";


describe("Test Suite",()=>{
	it("Locator Chaining",async()=>{
      let calc=new Calculator();
	   await browser.get("http://juliemr.github.io/protractor-demo/");
       await calc.firsteditbox.sendKeys("3");
       await calc.SecondEditBox.sendKeys("5");
       await calc.ClickButton.click();
       calc.getresults.getText()
		.then((text)=>{
			console.log(text);
		})
    })
    it("Angular Website",async()=>{
       let ap=new angularHomePage();
       await  browser.get("https://angularjs.org/");
       await ap.angularLink.click();
       await ap.seachbox.sendKeys("Hello");
    })
})