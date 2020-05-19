class Spicejet{

get loginSignUpLink() {return $('#ctl00_HyperLinkLogin')}
get spiceClubMem() {return $('=SpiceClub Members')}
get memberLogin() {return $('=Member Login')}

get playMusic() {return $('div.stage__player_btn.play')}
get pauseMusic() {return $('div.player__controls__stop')}

moveToElement(element){
    element.waitForDisplayed();
    element.moveTo();
}

clickElement(element){
    element.waitForDisplayed();
    element.click();
}





}

module.exports = new Spicejet();