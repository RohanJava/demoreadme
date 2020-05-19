const spicejetPage = require("../pages/actions.page")

browser.addCommand('isVideoPaused', function(){
    var isPaused = browser.execute(function (){
        var video = document.querySelector('video');
        return video.paused;
    })
    return isPaused.value;
})

describe('about us video', function(){

beforeEach(function(){
    browser.url('https://demo:DMHDemo1@audio.dmhub.de/')
    browser.maximizeWindow()
})
   
       
        //loginPage.doLogin(configData.username, configData.password)
        //const title = homePage.getPageTitle()
        //console.log('home page title is', title)
        //assert.equal(constants.HOME_PAGE_TITLE, title, 'title is not found')
    

    it('should open with paused music', function(){
        var isPaused = browser.isVideoPaused();
        expect(isPaused).to.equal('true');

    })

    it.skip("play music", function(){
        spicejetPage.clickElement(spicejetPage.playMusic)
        var isPaused = browser.isVideoPaused();
        expect(isPaused).to.be.false;
        
    })
    it.skip("pause music", function(){
        spicejetPage.clickElement(spicejetPage.playMusic)
        browser.pause(1000)
        spicejetPage.clickElement(spicejetPage.pauseMusic)
        var isPaused = browser.isVideoPaused();
        expect(isPaused).to.be.true;
    })




})
/*describe("page actions features", function(){

    it("move to element", function(){

        browser.url("https://www.spicejet.com/");
        spicejetPage.moveToElement(spicejetPage.loginSignUpLink);
        spicejetPage.moveToElement(spicejetPage.spiceClubMem);
        spicejetPage.clickElement(spicejetPage.memberLogin);
        browser.pause(5000);

    });




});*/