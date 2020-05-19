const internetPage = require("../pages/internetpage");

describe("handling checkboxes", function(){

    it("check page url", function(){
        browser.url("https://the-internet.herokuapp.com/");
        expect(browser.getUrl()).equals("https://the-internet.herokuapp.com/")

    })

    it("check checkbox page header", function(){
        browser.url('https://the-internet.herokuapp.com/');
        internetPage.clickOnLink(6);
        internetPage.h3Header.waitForDisplayed();
        const text = internetPage.h3Header.getText();
        expect(text).equals("Checkboxes");
        
    });

    it("should click checkbox", function(){
        browser.url('https://the-internet.herokuapp.com/');
        internetPage.clickOnLink(6);
        browser.pause(5000);
        internetPage.h3Header.waitForDisplayed();
        internetPage.clickOnCheckBox(1);
        browser.pause(5000);
        
        expect(internetPage.getCheckBoxElement(1).isSelected()).equals(true);

        browser.pause(5000);


    });
    it("check checkbox page url", function(){
        browser.url('https://the-internet.herokuapp.com/');
        internetPage.clickOnLink(6);
        expect(browser.getUrl()).equals("https://the-internet.herokuapp.com/checkboxes");
        
    });


});