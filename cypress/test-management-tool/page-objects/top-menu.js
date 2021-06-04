/// <reference types="cypress" />

const logoutLnk = "*[data-testid=logoutLnk]"
const userDisplayName = "*[data-testid=userDisplayName]"
const appTitle = "*[data-testid=appTitle]"

export function assertDisplayName(expectedDisplayName){
    cy.get(userDisplayName).should('have.text', expectedDisplayName)
}

export function clickLogout(){
    cy.get(logoutLnk).should("be.visible")
    cy.get(logoutLnk).first().click()
}

export function clickAppTitle(){
    cy.get(appTitle).should("be.visible")
    cy.get(appTitle).click({ multiple: true })
}