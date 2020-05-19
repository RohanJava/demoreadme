const loginPage = require("../pages/loginpage");


describe('angularjs homepage', function() {
    it('should have a title', function() {
      browser.url('https:demo:DMHDemo1@audio.dmhub.de/');
      browser.maximizeWindow()
      browser.executeScript("document.querySelector('div.stage__player_btn.play')").click()


    });

});

 