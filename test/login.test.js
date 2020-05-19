const loginPage = require("../pages/loginpage");


describe("Handle application login", function(){

    it("enter username", function(){
        browser.url(`${browser.options.baseUrl}/login`);
        loginPage.enterUserName('tomsmith');
        assert.equal('tomsmith', loginPage.username.getValue());
    });

    it("enter password", function(){
        loginPage.enterPassword ('SuperSecretPassword');
        assert.equal('SuperSecretPassword', loginPage.password.getValue());

    });

    it("click login button", function(){
        loginPage.clickOnLogin();

    });
    it("Should clear username value", function(){
        loginPage.username.click();
        loginPage.username.clearValue();
        assert.equal('', loginPage.username.getValue());

    });







});
