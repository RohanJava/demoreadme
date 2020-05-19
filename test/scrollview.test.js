const crmPage = require("../pages/crm.page") 

describe("scroll to element", function(){

    it("should scroll to forgot pwd link", function(){

        browser.url("https://www.blazemeter.com/");
        console.log("in view port", crmPage.forgotpwdLink.isDisplayedInViewport());
        //crmPage.forgotpwdLink.click();
        crmPage.forgotpwdLink.scrollIntoView();
        console.log("in view port", crmPage.forgotpwdLink.isDisplayedInViewport());
        crmPage.moveToElement(crmPage.forgotpwdLink)
        crmPage.forgotpwdLink.click();
    });

})         