class LoginPage{

get username() { return $('#username')}
get password() { return $('#password')}
get loginBtn() { return $('button')}

get playBtn() {return $('div.stage__player_btn.play')}
get pausedBtn() {return $('div.stage__player_btn.stop')}
get musicElement() {return $('#player')}

enterUserName(text){
    this.username.waitForDisplayed();
    this.username.setValue(text);
}
enterPassword(text){
    this.password.waitForDisplayed();
    this.password.setValue(text);
}
clickOnLogin(text){
    this.loginBtn.waitForDisplayed();
    this.loginBtn.click();
}
clickOnPlayBtn(){
    this.playBtn.click();
}
clickOnPausedBtn(){
    this.pausedBtn.click()
}
getMusicElement(){
    this.musicElement()
}

}
module.exports = new LoginPage();