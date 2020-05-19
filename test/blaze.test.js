const blazePage = require("../pages/blazemeter")

describe("blaze page element handle", function(){

it("get texts of all main links", function(){

    //browser.url('https:demo:DMHDemo1@audio.dmhub.de/');
    
    browser.url('https://www.blazemeter.com/');
    //browser.pause(10000);
    //blazePage.getTextForLi;
    //blazePage.useCasesElementsText;
    console.log(blazePage.specifChidElement(3).getText());
    blazePage.getSpecificChildElementText(4);
  //blazePage.dmhtext;

})

it("main heading displayed?", function(){
    console.log(blazePage.mainHeader.isDisplayed());
})
it("main heading enabled?", function(){
    console.log(blazePage.mainHeader.isEnabled());
})
it("main heading exists?", function(){
    console.log(blazePage.mainHeader.isExisting());
})
it("main heading displazed in view port?", function(){
    console.log(blazePage.mainHeader.isDisplayedInViewport());
})
it("click on product link if displayed", function(){
    browser.checkElement
   blazePage.clickOnProductLink();
    browser.pause(5000);
})



});