import { ElementFinder,element,by } from "protractor";

export class angularHomePage{
    angularLink:ElementFinder;
    seachbox:ElementFinder;

    constructor(){
        this.angularLink=element(by.linkText("angular.io"));
        this.seachbox=element(by.css("input[type='search']"));
    }
}