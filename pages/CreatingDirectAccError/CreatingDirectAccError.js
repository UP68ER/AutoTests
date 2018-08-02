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
                .SetValue(DirectAccSelectors.Pesel, '9805290943', 'Wrong pesel')
                .SetValue(DirectAccSelectors.Phone, '791164577')
                return browser
    }
    
    

    
    this.typeEmailandSubmit = function(){
            browser
                .SetValue(DirectAccSelectors.Mail1, 'pmalek74198@gmail.com', 'Set email in email input')
                .SetValue(DirectAccSelectors.Mail2, 'pmalek74198@gmail.com', 'Confirm email in email input')
                .waitForElementVisible(DirectAccSelectors.Error, 1000, 'Submit button is disabled because of wrong PESEL')
                return browser

    }

    


}