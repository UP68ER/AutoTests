module.exports = {
    'test' : function(browser){
        browser
        
            .page.CreatingDirectAcc().goOpenDirectAcc()
            .page.CreatingDirectAcc().typeNameAndLastName()
            .page.CreatingDirectAcc().typePeselAndPhoneNumber()
            .page.CreatingDirectAcc().typeEmailandSubmit()
            .page.CreatingDirectAcc().typeIdcardandValidity()
            .page.CreatingDirectAcc().typeBirthPlaceandMaidenName()
            .page.CreatingDirectAcc().typeAdress()
            .page.CreatingDirectAcc().ProvideTaxInfoandExpectAnError()
            .end();
        

        }

    }