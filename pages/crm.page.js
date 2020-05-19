class CRMPage{
    
    get forgotpwdLink(){
    return $('=Black Friday')   //Forgot Password
    }



    moveToElement(element){
        element.waitForDisplayed();
        element.moveTo();
    }

}

module.exports = new CRMPage();