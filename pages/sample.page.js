class Sample{

    get link () { return $("//[contains(text(),'PRODUCT')]")}

clickOnLink(){
   
    this.link.click();
}

}
module.exports = new Sample();