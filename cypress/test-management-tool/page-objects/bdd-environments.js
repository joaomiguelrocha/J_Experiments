/// <reference types="cypress" />

const backBtn = "*[data-testid=backBtn]"
const addEnvironment = "*[data-testid=addEnvironment]"

const envNameInput = "*[data-testid=envNameInput]"
const envUrlInput = "*[data-testid=envUrlInput]"
const popupCloseLink = "*[data-testid=popupCloseLink]"
const saveBtn = "*[data-testid=saveBtn]"

const nameFilter = "*[data-testid=nameFilter]"
const environmentList = "*[data-testid=environmentList]"
const environmentNameLink = "*[data-testid=environmentNameLink]"
const environmentUrl = "*[data-testid=environmentUrl]"
const deleteEnv = "*[data-testid=deleteEnv]"

export function clickBack()
{
    cy.get(backBtn).should('be.visible')
    cy.get(backBtn).should('be.enabled')
    cy.get(backBtn).click()
}

export function addNewEnvironment()
{
    cy.get(addEnvironment).should('be.visible')
    cy.get(addEnvironment).should('be.enabled')
    cy.get(addEnvironment).click()
}

export function fillNewEnvData(envName, envURL){
    cy.get(envNameInput).should('be.visible')
    cy.get(envNameInput).should('be.enabled')
    cy.get(envNameInput).type(envName)

    cy.get(envUrlInput).should('be.visible')
    cy.get(envUrlInput).should('be.enabled')
    cy.get(envUrlInput).type(envURL)
}

export function verifyEnvFormIsEmpty(){
    cy.get(envNameInput).should('be.visible')
    cy.get(envNameInput).should('be.enabled')
    cy.get(envNameInput).should('have.value', '')

    cy.get(envUrlInput).should('be.visible')
    cy.get(envUrlInput).should('be.enabled')
    cy.get(envUrlInput).should('have.value', '')
}

export function verifyEnvFormHasExpectedData(expectedEnvName, expectedUrl){
    cy.get(envNameInput).should('be.visible')
    cy.get(envNameInput).should('be.enabled')
    cy.get(envNameInput).should('have.value', expectedEnvName)

    cy.get(envUrlInput).should('be.visible')
    cy.get(envUrlInput).should('be.enabled')
    cy.get(envUrlInput).should('have.value', expectedUrl)
}

export function closePopup(){
    cy.get(popupCloseLink).should('be.visible')
    cy.get(popupCloseLink).click()
}

export function clickSaveEnvironment(){
    cy.get(saveBtn).should('be.visible')
    cy.get(saveBtn).should('be.enabled')
    cy.get(saveBtn).click()
}

export function searchEnv(text){
    cy.get(nameFilter).type(text)
}

export function clearSearch(){
    cy.get(nameFilter).clear()
}

export function assertEnvData(expectedName, expectedUrl, rowNum){
    cy.get(`${environmentList} tbody tr:nth-child(${rowNum}) ${environmentNameLink}`).should('have.text', expectedName)
    cy.get(`${environmentList} tbody tr:nth-child(${rowNum}) ${environmentUrl}`).should('have.text', expectedUrl)
}

export function editEnvDetail(rowNum){
    cy.get(`${environmentList} tbody tr:nth-child(${rowNum}) ${environmentNameLink}`).click()
}

export function assertNumEnvsFound(expectedCount){
    cy.get(`${environmentList} tbody tr`).should('have.length', expectedCount)
}

export function deleteEnvironment(rowNum){
    cy.get(`${environmentList} tbody tr:nth-child(${rowNum}) ${deleteEnv}`).click()
    cy.on('window:confirm', () => true)
}