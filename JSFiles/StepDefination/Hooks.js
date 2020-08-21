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
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
cucumber_1.Before({ tags: "@Calculatorvalidations" }, function () {
    // This hook will be executed before scenarios tagged with @Calculatorvalidations
    protractor_1.browser.manage().window().maximize();
});
cucumber_1.After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        if (scenario.result.status === cucumber_1.Status.FAILED) {
            const screenshot = yield protractor_1.browser.takeScreenshot();
            this.attach(screenshot, 'image/png');
        }
    });
});
cucumber_1.Before({ tags: "@AngularValidations" }, function () {
    // This hook will be executed before scenarios tagged with @AngularValidations
    console.log("I will execute first");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TdGVwRGVmaW5hdGlvbi9Ib29rcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHVDQUE4QztBQUM5QywyQ0FBcUM7QUFHckMsaUJBQU0sQ0FBQyxFQUFDLElBQUksRUFBRSx3QkFBd0IsRUFBQyxFQUFFO0lBQ3ZDLGlGQUFpRjtJQUNqRixvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0FBRUgsZ0JBQUssQ0FBQyxVQUFnQixRQUFROztRQUM1QixJQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFHLGlCQUFNLENBQUMsTUFBTSxFQUN6QztZQUNFLE1BQU0sVUFBVSxHQUFFLE1BQU0sb0JBQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNqRCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBQyxXQUFXLENBQUMsQ0FBQztTQUNyQztJQUNELENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFTCxpQkFBTSxDQUFDLEVBQUMsSUFBSSxFQUFFLHFCQUFxQixFQUFDLEVBQUU7SUFDcEMsOEVBQThFO0lBQzlFLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUN0QyxDQUFDLENBQUMsQ0FBQyJ9