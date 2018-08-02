var DirectAccSelectors = require('./DirectAccSelectors')

module.exports = function (browser) {
    
    this.goOpenDirectAcc = function() {
         browser
            .url('https://www.ingbank.pl/male-firmy')
            .maximizeWindow()
            .waitForElementVisible(DirectAccSelectors.Cookies, 1000, 'Cookie warning is visible')
            .Click(DirectAccSelectors.Cookies,'Click on cookies warning')
            .Click(DirectAccSelectors.karty, 'Click "Kredyty i pożyczki" on navi panel')
            .waitForElementVisible('body', 1000, 'Page has been loaded (%s)')
            .Click(DirectAccSelectors.more, 'Click "Więcej" to find out more about "Karty do konta i przedpłacowe"')
            .waitForElementVisible('body', 1000, 'Page has been loaded (%s)')
            .Click(DirectAccSelectors.visa,'Choose Karta Visa Business')
            .waitForElementVisible('body', 1000, 'Page has been loaded (%s)')
            .Click(DirectAccSelectors.openacc,'Click on button Open Account')
            .waitForElementVisible('body', 1000, 'Page has been loaded (%s)')
            return browser
            
    }

    this.typeNameAndLastName = function(){
            browser
                .waitForElementVisible('body', 1000, 'Page has been loaded (%s)')
                .SetValue(DirectAccSelectors.FirstName, 'Paweł', 'Name field is visible and name is set')
                .SetValue(DirectAccSelectors.LastName, 'Małek', 'Surname field is visible and surname is set')
                return browser
    }

    this.typePeselAndPhoneNumber = function(){
            browser
                .SetValue(DirectAccSelectors.Pesel, '98052909439')
                .SetValue(DirectAccSelectors.Phone, '791164577')
                return browser

    }
    
    this.typeEmailandSubmit = function(){
            browser
                .SetValue(DirectAccSelectors.Mail1, 'pmalek74198@gmail.com', 'Set email in email input')
                .SetValue(DirectAccSelectors.Mail2, 'pmalek74198@gmail.com', 'Confirm email in email input')
                .Click(DirectAccSelectors.Submit, 'Click on submit button')
                .waitForElementVisible('body', 1000, 'Page has been loaded (%s)')
                return browser

    }

    this.typeIdcardandValidity= function(){
            browser
                .SetValue(DirectAccSelectors.Idnumber,'AZC549997','Set ID Number')
                .Click(DirectAccSelectors.Day, 'Select ID release day')    
                .Click(DirectAccSelectors.Month, 'Select ID release month')
                .Click(DirectAccSelectors.Year, 'Select ID release year')
                .Click(DirectAccSelectors.eDay,'Select ID day of validity')
                .Click(DirectAccSelectors.eMonth,'Select ID month of validity')
                .Click(DirectAccSelectors.eYear, 'Select ID year of validity')
                return browser
    }

    this.typeBirthPlaceandMaidenName = function(){
            browser
                .SetValue(DirectAccSelectors.BirthPlace, 'Włoszczowa', 'Type in BirthPlace')
                .SetValue(DirectAccSelectors.MaidenName, 'Orzeł', 'Type in your mother"s Maiden Name')
                return browser

    }

    this.typeAdress = function() {
            browser
                .SetValue(DirectAccSelectors.Street, 'Szkolna', 'Type in street')
                .SetValue(DirectAccSelectors.Number, '24', 'Type in house number')
                .SetValue(DirectAccSelectors.PostCode, ' 42230', 'Type in postcode')
                .SetValue(DirectAccSelectors.Town, 'Koniecpol', 'Type in Town')
                return browser


    }

    this.ProvideTaxInfoandExpectAnError = function(){
            browser
                .Click(DirectAccSelectors.No1, 'Choose not having other residences than Poland')
                .Click(DirectAccSelectors.No2, 'Choose not having american residency')
                return browser

    }


    
}

