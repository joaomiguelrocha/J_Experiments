/// <reference types="cypress" />

const usernameInput = "*[data-testid=usernameInput]"
const passwordInput = "*[data-testid=passwordInput]"
const rememberMe = "*[data-testid=rememberMe]"
const LoginBtn = "*[data-testid=loginBtn]"
const usernameRequiredSpan = "*[data-testid=usernameInput] ~.validation-message"
const passwordRequiredSpan = "*[data-testid=passwordInput] ~.validation-message"

export function fillCredentials(username, password, clickRememberme){
    if(username != ""){
        cy.get(usernameInput).type(username)
    }
    if(password != ""){
        cy.get(passwordInput).type(password)
    }
    if(clickRememberme = true)
    {
        cy.get(rememberMe).click()
    }
}

export function clearForm() {
    cy.get(usernameInput).clear()
    cy.get(passwordInput).clear()
    cy.get(rememberMe).uncheck()
}

export function clickLogin() {
    cy.get(LoginBtn).click()
}

export function usernameRequiredIsVisible(expectation) {
    if(expectation = true)
    {
        cy.get(usernameRequiredSpan).should('be.visible')
        cy.get(usernameRequiredSpan).should("have.text", "Required field!")
    }
    else
    {
        cy.get(usernameRequiredSpan).should('not.be.be.visible')
    }
}

export function passwordRequiredIsVisible(expectation) {
    if(expectation = true)
    {
        cy.get(passwordRequiredSpan).should('be.visible')
        cy.get(passwordRequiredSpan).should("have.text", "Required field!")
    }
    else
    {
        cy.get(passwordRequiredSpan).should('not.be.be.visible')
    }
}