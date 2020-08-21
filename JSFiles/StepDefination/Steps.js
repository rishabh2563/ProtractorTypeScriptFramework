"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const Calculator_1 = require("../PajeObjects/Calculator");
const AngularPage_1 = require("../PajeObjects/AngularPage");
const protractor_1 = require("protractor");
const chai_1 = __importDefault(require("chai"));
var expect = chai_1.default.expect;
let calc = new Calculator_1.Calculator();
let ap = new AngularPage_1.angularHomePage();
cucumber_1.Given('Navigate to the {string} site', (string) => __awaiter(void 0, void 0, void 0, function* () {
    if (string == "Calc") {
        yield protractor_1.browser.get("http://juliemr.github.io/protractor-demo/");
    }
    else if (string == "AngularJs") {
        yield protractor_1.browser.get("https://angularjs.org/");
    }
}));
cucumber_1.When('when i add two numbers {string} and {string}', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield calc.firsteditbox.sendKeys(string);
    yield calc.SecondEditBox.sendKeys(string2);
}));
cucumber_1.When('User clicks on Header Link', () => __awaiter(void 0, void 0, void 0, function* () {
    yield ap.angularLink.click();
}));
cucumber_1.When('User is navigated to Angular webPage', function () {
    console.log("Navigated to New Page");
});
cucumber_1.Then('the result outcome is {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield calc.ClickButton.click();
    yield calc.getresults.getText()
        .then((text) => {
        expect(text).to.equal(string);
    });
}));
cucumber_1.Then('User Enters {string} in the SearchBox', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(3000);
    yield ap.seachbox.sendKeys(string);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TdGVwRGVmaW5hdGlvbi9TdGVwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUE2QztBQUM3QywwREFBdUQ7QUFDdkQsNERBQTREO0FBQzVELDJDQUFtQztBQUNuQyxnREFBd0I7QUFDeEIsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUN6QixJQUFJLElBQUksR0FBQyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztBQUMxQixJQUFJLEVBQUUsR0FBQyxJQUFJLDZCQUFlLEVBQUUsQ0FBQztBQUUzQixnQkFBSyxDQUFDLCtCQUErQixFQUFHLENBQU0sTUFBTSxFQUFDLEVBQUU7SUFDckQsSUFBRyxNQUFNLElBQUUsTUFBTSxFQUFDO1FBQ2hCLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQztLQUNoRTtTQUNJLElBQUcsTUFBTSxJQUFFLFdBQVcsRUFBQztRQUMxQixNQUFPLG9CQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7S0FDOUM7QUFDSCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDhDQUE4QyxFQUFFLENBQU0sTUFBTSxFQUFFLE9BQU8sRUFBQyxFQUFFO0lBQzNFLG9FQUFvRTtJQUNwRSxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUE7QUFDNUMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyw0QkFBNEIsRUFBRSxHQUFPLEVBQUU7SUFDMUMsTUFBTSxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQy9CLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsc0NBQXNDLEVBQUU7SUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLGdDQUFnQyxFQUFFLENBQU0sTUFBTSxFQUFDLEVBQUU7SUFDcEQsb0VBQW9FO0lBQ3BFLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMvQixNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFO1NBQzdCLElBQUksQ0FBQyxDQUFDLElBQUksRUFBQyxFQUFFO1FBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDL0IsQ0FBQyxDQUFDLENBQUE7QUFDTCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBQ0gsZUFBSSxDQUFDLHVDQUF1QyxFQUFFLENBQU0sTUFBTSxFQUFDLEVBQUU7SUFDM0QsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3JDLENBQUMsQ0FBQSxDQUFDLENBQUMifQ==