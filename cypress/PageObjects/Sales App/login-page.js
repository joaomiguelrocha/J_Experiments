/// <reference types="cypress" />

import * as osInteractions from '../../cypress-OS-abstractions/os-interactions.js'

// Page Selectors
const _usernameInput = 'UsernameInput'
const _passwordInput = 'PasswordInput'
const _checkBoxInput = 'RememberMeCheckbox'
const _loginBtn = 'LoginBtn'

export function fillLoginForm(username, password, isChecked){
    if(username != "") {
        osInteractions.setTextElem('input', _usernameInput, username)
    }
    if(password != "")
    {
        osInteractions.setTextElem('input', _passwordInput, password)
    }
    if(isChecked)
    {
        osInteractions.clickElem('input', _checkBoxInput)
    }
}

export function clearLoginForm(){
    osInteractions.clearElem('input', _usernameInput)
    osInteractions.clearElem('input', _passwordInput)
}

export function clickLoginBtn(){
    osInteractions.clickElem('input', _loginBtn)
}

export function seeIfPretty(){
    cy.eyesCheckWindow('login page')
}