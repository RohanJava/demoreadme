const sample = require("../pages/sample.page")


describe("click on link", function(){
    it("click the link", function(){
    
        browser.url("https://www.blazemeter.com/");
        //console.log(sample.link);
        //browser.checkElement($("//a[contains(text(),'PRODUCT')]"));
        sample.clickOnLink();

    }) 
   

})