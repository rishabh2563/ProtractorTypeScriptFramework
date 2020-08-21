import { ElementFinder,element,by } from "protractor";

 export class Calculator{
    firsteditbox:ElementFinder;
    SecondEditBox:ElementFinder;
    ClickButton:ElementFinder;
    getresults:ElementFinder;

    constructor(){
        this.firsteditbox=element(by.model("first"));
        this.SecondEditBox=element(by.model("second"));
        this.ClickButton=element(by.id("gobutton"));
        this.getresults=element(by.repeater("result in memory")).element(by.css("td:nth-child(3)"));
    }
}