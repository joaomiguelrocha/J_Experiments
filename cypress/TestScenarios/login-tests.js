/// <reference types="cypress" />

import * as osAbstractions from '../cypress-OS-abstractions/os-selector-abstractions.js'
import * as SalesLoginPageObj from '../PageObjects/Sales App/login-page.js'
import * as SalesTopMenuPageObj from '../PageObjects/Sales App/top-menu.js'
import * as SalesContactsPageObj from '../PageObjects/Sales App/contacts-page.js'

export function runTest1(record){
    SalesLoginPageObj.fillLoginForm(record.username, record.password, true)
    SalesLoginPageObj.clickLoginBtn()
    SalesTopMenuPageObj.ensureLogoutVisible()        
    // ######### navigate to contacts and test #########
    SalesTopMenuPageObj.navigateContacts()
    SalesContactsPageObj.clickPopup()
    SalesContactsPageObj.verifyPopupSpanText(record.expectedPopupText)
    SalesContactsPageObj.setTextInPopUpInput(record.textToTypeInPopup)
    SalesContactsPageObj.clickPopupBtn()
    SalesContactsPageObj.checkPopupCloseMessageDisplayed(record.expectedPopupCloseMessage)
    // ######### navigate to companies and verify expected company #########
    SalesTopMenuPageObj.navigateCompanies()
    // TODO
    // ######### go back to dashboard and logout #########
    SalesTopMenuPageObj.navigateDashboard()
    SalesTopMenuPageObj.clickLogout()
}

export function runTest2(){
    SalesLoginPageObj.fillLoginForm("", "", true)
    SalesLoginPageObj.clearLoginForm()
    SalesLoginPageObj.clickLoginBtn()
    SalesLoginPageObj.fillLoginForm("some random username", "", true)
    SalesLoginPageObj.clickLoginBtn()
    SalesLoginPageObj.clearLoginForm()
    SalesLoginPageObj.fillLoginForm("", "some random password", false)
    SalesLoginPageObj.clickLoginBtn()
}