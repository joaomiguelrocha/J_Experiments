/// <reference types="cypress" />

const usernameInput = "*[data-testid=usernameInput]"
const passwordInput = "*[data-testid=passwordInput]"
const rememberMe = "*[data-testid=rememberMe]"
const LoginBtn = "*[data-testid=loginBtn]"

export function fillCredentials(username, password, clickRememberme){
    cy.get(usernameInput).type(username)
    cy.get(passwordInput).type(password)
    if(clickRememberme = true)
    {
        cy.get(rememberMe).click()
    }
}

export function clearForm() {
    cy.get(usernameInput).clear()
    cy.get(passwordInput).clear()
    cy.get(rememberMe).clear()
}

export function clickLogin() {
    cy.get(LoginBtn).click()
}