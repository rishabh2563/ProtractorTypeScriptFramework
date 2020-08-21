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
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const Calculator_1 = require("./PajeObjects/Calculator");
const AngularPage_1 = require("./PajeObjects/AngularPage");
describe("Test Suite", () => {
    it("Locator Chaining", () => __awaiter(void 0, void 0, void 0, function* () {
        let calc = new Calculator_1.Calculator();
        yield protractor_1.browser.get("http://juliemr.github.io/protractor-demo/");
        yield calc.firsteditbox.sendKeys("3");
        yield calc.SecondEditBox.sendKeys("5");
        yield calc.ClickButton.click();
        calc.getresults.getText()
            .then((text) => {
            console.log(text);
        });
    }));
    it("Angular Website", () => __awaiter(void 0, void 0, void 0, function* () {
        let ap = new AngularPage_1.angularHomePage();
        yield protractor_1.browser.get("https://angularjs.org/");
        yield ap.angularLink.click();
        yield ap.seachbox.sendKeys("Hello");
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdHNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9UZXN0c3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUFtQztBQUVuQyx5REFBc0Q7QUFDdEQsMkRBQTREO0FBRzVELFFBQVEsQ0FBQyxZQUFZLEVBQUMsR0FBRSxFQUFFO0lBQ3pCLEVBQUUsQ0FBQyxrQkFBa0IsRUFBQyxHQUFPLEVBQUU7UUFDMUIsSUFBSSxJQUFJLEdBQUMsSUFBSSx1QkFBVSxFQUFFLENBQUM7UUFDNUIsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO1FBQzVELE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEMsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2QyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUU7YUFDN0IsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFDLEVBQUU7WUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFBO0lBQ0EsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUNGLEVBQUUsQ0FBQyxpQkFBaUIsRUFBQyxHQUFPLEVBQUU7UUFDM0IsSUFBSSxFQUFFLEdBQUMsSUFBSSw2QkFBZSxFQUFFLENBQUM7UUFDN0IsTUFBTyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQzdDLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM3QixNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZDLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQSJ9