module.exports = {
    'test' : function(browser){
        browser
        
            .page.CreatingDirectAccError().goOpenDirectAcc()
            .page.CreatingDirectAccError().typeNameAndLastName()
            .page.CreatingDirectAccError().typePeselAndPhoneNumber()
            .page.CreatingDirectAccError().typeEmailandSubmit()
            .end();
        

        }

    }