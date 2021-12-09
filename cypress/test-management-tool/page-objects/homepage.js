/// <reference types="cypress" />

import { confimDialogOk, confimDialogCancel } from "../../cypress-OS-abstractions/abstractions.js"

const newProjectBtn = "*[data-testid=newProjectBtn]"
const manageBddEnvsBtn = "*[data-testid=manageBddEnvsBtn]"
const projectsList = "*[data-testid=projectsList]"
const projectName = "*[data-testid=projectName]"
const projectDashboardBtn = "*[data-testid=projectDashboardBtn]"
const projectDeleteBtn = "*[data-testid=projectDeleteBtn]"
const projectNameInput = "input[data-testid=projectNameInput]"
const saveProjectBtn = "*[data-testid=saveProjectBtn]"
const popupCloseLink = "*[data-testid=popupCloseLink]"
const searchInput = "*[data-testid=searchInput]"


export function manageBDDEnvironments(){
    cy.get(manageBddEnvsBtn).should('be.visible')
    cy.get(manageBddEnvsBtn).should('be.enabled')
    cy.get(manageBddEnvsBtn).click()
}

export function newProjectPopup(){
    cy.get(newProjectBtn).should('be.visible')
    cy.get(newProjectBtn).should('be.enabled')
    cy.get(newProjectBtn).click()
}

export function assertEmptyPopupForm(){
    cy.get(projectNameInput).should('be.visible')
    cy.get(projectNameInput).should('be.enabled')
    cy.get(projectNameInput).should('be.empty')
}

export function setNewProjectData(name){
    cy.get(projectNameInput).type(name)
}

export function closeProjectPopup(){
    cy.get(popupCloseLink).should('be.visible')
    cy.get(popupCloseLink).click()
}

export function saveNewProject(){
    cy.get(saveProjectBtn).should('be.visible')
    cy.get(saveProjectBtn).should('be.enabled')
    cy.get(saveProjectBtn).click()
}

export function searchProj(text){
    cy.get(searchInput).type(text)
}

export function clearSearch(){
    cy.get(searchInput).clear()
}

export function assertProjData(expectedName, rowNum, verifyLength, expectedLength){
    
    if(verifyLength==true){
        cy.get(`${projectsList} tbody tr`).should('have.length', expectedLength)
    }
    // should find the expected project name in given row
    cy.get(`${projectsList} tbody tr:nth-child(${rowNum}) ${projectName}`).should('have.text', expectedName)

}

export function assertProjectRowsFound(expectedRowsFound){
    cy.get(`${projectsList} tbody tr`).should('have.length', expectedRowsFound)
}

export function deleteProject(rowNum, accept){
    cy.get(`${projectsList} tbody tr:nth-child(${rowNum}) ${projectDeleteBtn}`).should('be.visible')
    cy.get(`${projectsList} tbody tr:nth-child(${rowNum}) ${projectDeleteBtn}`).should('be.enabled')
    cy.get(`${projectsList} tbody tr:nth-child(${rowNum}) ${projectDeleteBtn}`).click()
    if(accept == true)
    {
        confimDialogOk()
    }
    else
    {
        confimDialogCancel()
    }
}

export function gotoProjectDetails(rowNum){
    cy.get(`${projectsList} tbody tr:nth-child(${rowNum}) ${projectDashboardBtn}`).should('be.visible')
    cy.get(`${projectsList} tbody tr:nth-child(${rowNum}) ${projectDashboardBtn}`).should('be.enabled')
    cy.get(`${projectsList} tbody tr:nth-child(${rowNum}) ${projectDashboardBtn}`).click()
}