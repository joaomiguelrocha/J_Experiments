/// <reference types="cypress" />

const newProjectBtn = "*[data-testid=newProjectBtn]"
const manageBddEnvsBtn = "*[data-testid=manageBddEnvsBtn]"
const projectsList = "*[data-testid=projectsList]"
const projectName = "*[data-testid=projectName]"
const projectDashboardBtn = "*[data-testid=projectDashboardBtn]"
const usernameInput = "*[data-testid=projectDeleteBtn]"

export function manageBDDEnvironments(){
    cy.get(manageBddEnvsBtn).should('be.visible')
    cy.get(manageBddEnvsBtn).should('be.enabled')
    cy.get(manageBddEnvsBtn).click()
}

