/// <reference types="cypress" />

import * as osAbstractions from '../../cypress-OS-abstractions/os-selector-abstractions.js'
import * as osInteractions from '../../cypress-OS-abstractions/os-interactions.js'

// Page Selectors
const _popupTextSpan = 'TextTestSpan'
const _popupTextInput = 'TextInput'
const _popupBtn = 'ClickBtn'



// actions
export function clickPopup(){
    osInteractions.clickByInnerText('testPopup')
}

export function verifyPopupSpanText(expectedText){
    osAbstractions.getIframeBody('TestPopup').find('*[Id$=' + _popupTextSpan + ']').should('have.text', expectedText)
    //osAbstractions.getByElementAndOsId('*',_popupTextSpan).should('have.text', expectedText)
}

export function setTextInPopUpInput(text){
    //osAbstractions.getByElementAndOsId('input', _popupTextInput).type(text)
    osAbstractions.getIframeBody('TestPopup').find('input[Id$=' + _popupTextInput + ']').type(text)
}

export function clickPopupBtn(){
    //osAbstractions.getByOsId(_popupBtn).click()
    osAbstractions.getIframeBody('TestPopup').find('input[Id$=' + _popupBtn + ']').click()
}

export function checkPopupCloseMessageDisplayed(expectedMessage){
    osInteractions.assertVisibleByInnerText(expectedMessage)
}
