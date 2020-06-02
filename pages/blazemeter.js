 class BlazePage{

get dmh(){
    return $('div.header__nav__wrapper');
}
get dmhCss(){
    return this.dmh.$$('a');
}
get dmhtext(){
    return this.dmhCss.filter(element => {
console.log(element.getText());
    });
}

get parent(){
    return $('ul.list-nav-links');
}
get childElements(){
    return this.parent.$$('li');
}
get getTextForLi(){
    return this.childElements.filter(element => {
        console.log(element.getText());
    });
}
get useCasesElements(){ 
    return $$('div#main_b_footer_second_block>ul>li')
}

get useCasesElementsText(){
    return this.useCasesElements.filter(element =>{
console.log(element.getText());
    });
}
  
specifChidElement(index){                             //can not pass parameters in getter method, thus eleminate get keyword
return this.parent.$(`li:nth-child(${index})`)
}
getSpecificChildElementText(index){
    console.log(this.specifChidElement(index).getText());
}


get mainHeader(){
return $('h2.home_title')

}

get productLink(){
    return $('ul.list-nav-links li:nth-child(1) a')
}
clickOnProductLink(){
if(this.productLink.isDisplayed() === true){
    this.productLink.click();
}
}

}
module.exports = new BlazePage();