import {Before,After, Status} from "cucumber";
import { browser } from "protractor";


Before({tags: "@Calculatorvalidations"}, function () {
  // This hook will be executed before scenarios tagged with @Calculatorvalidations
  browser.manage().window().maximize();
});

After(async function (scenario) {
  if(scenario.result.status===Status.FAILED)
  { 
    const screenshot= await browser.takeScreenshot();
    this.attach(screenshot,'image/png');
  }
  });

Before({tags: "@AngularValidations"}, function () {
  // This hook will be executed before scenarios tagged with @AngularValidations
  console.log("I will execute first");
});