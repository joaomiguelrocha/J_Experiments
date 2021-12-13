/// <reference types="cypress" />

const backBtn = "*[data-testid=backBtn]"

const refreshPage = "*[data-testid=refreshPage]"
const createTestJob = "*[data-testid=createTestJob]"
const manageBddSuites = "*[data-testid=manageBddSuites]"

const totalActiveJobs = "*[data-testid=totalActiveJobs]"
const totalExecutedTests = "*[data-testid=totalExecutedTests]"
const totalPassedTests = "*[data-testid=totalPassedTests]"
const totalFailedTests = "*[data-testid=totalFailedTests]"

const popupJobName = "*[data-testid=jobNameInput]"
const popupApiKey = "*[data-testid=jobKeyInput]"
const popupVersion = "*[data-testid=jobVersionInput]"
const popupTypeDropdown = "*[data-testid=jobTypeDropdown]"
const saveJobBtn = "*[data-testid=saveJobBtn]"
const popupCloseLink = "*[data-testid=popupCloseLink]"

const searchJobInput = "*[data-testid=searchJobInput]"
const jobsList = "*[data-testid=jobsList]"
const jobName = "*[data-testid=jobName]"
const jobKey = "*[data-testid=jobKey]"
const onDemandStatus = "*[data-testid=onDemandStatus]"
const scheduledStatus = "*[data-testid=scheduledStatus]"
const apiStatus = "*[data-testid=apiStatus]"
const jobVersion = "*[data-testid=jobVersion]"
const jobDetailsBtn = "*[data-testid=jobDetailsBtn]"
const newVersionBtn = "*[data-testid=newVersionBtn]"
const triggerRunBtn = "*[data-testid=triggerRunBtn]"

export function clickBack(){
    cy.get(backBtn).should("be.visible")
    cy.get(backBtn).should("be.enabled")
    cy.get(backBtn).click()
}

export function assertActiveTestJobs(expectedValue){
    cy.get(totalActiveJobs).should("be.visible")
    cy.get(totalActiveJobs).should("have.value", expectedValue)
}

export function assertTotalExecutedTests(expectedValue){
    cy.get(totalExecutedTests).should("be.visible")
    cy.get(totalExecutedTests).should("have.value", expectedValue)
}

export function assertTotalPassedTests(expectedValue){
    cy.get(totalPassedTests).should("be.visible")
    cy.get(totalPassedTests).should("have.value", expectedValue)
}

export function assertTotalFailedTests(expectedValue){
    cy.get(totalFailedTests).should("be.visible")
    cy.get(totalFailedTests).should("have.value", expectedValue)
}

export function assertJobRowsFound(expectedRowsFound){
    cy.get(`${jobsList} tbody tr`).should('have.length', expectedRowsFound)
}

export function searchJob(text){
    cy.get(searchJobInput).type(text)
}

export function clearSearch(){
    cy.get(searchJobInput).clear()
}

export function clickManageBddSuites(){
    cy.get(manageBddSuites).should("be.visible")
    cy.get(manageBddSuites).should("be.enabled")
    cy.get(manageBddSuites).click()
}

export function clickNewTestJob(){
    cy.get(createTestJob).should("be.visible")
    cy.get(createTestJob).should("be.enabled")
    cy.get(createTestJob).click()
}

export function clickRefreshPage(){
    cy.get(refreshPage).should("be.visible")
    cy.get(refreshPage).should("be.enabled")
    cy.get(refreshPage).click()
}

export function assertDefaultTestJobDataForm(){
    cy.get(popupJobName).should("be.visible")
    cy.get(popupJobName).should("be.enabled")
    cy.get(popupJobName).should("be.empty")

    cy.get(popupApiKey).should("be.visible")
    cy.get(popupApiKey).should("be.enabled")
    cy.get(popupApiKey).should("be.empty")

    cy.get(popupVersion).should("be.visible")
    cy.get(popupVersion).should("be.enabled")
    cy.get(popupVersion).should("be.empty")
    
    cy.get(popupTypeDropdown + " select").should("be.visible")
    cy.get(popupTypeDropdown + " select").should("be.enabled")
    cy.get(popupTypeDropdown + " select option:selected").should("have.text", "Component")
}

export function fillTestJobData(jobName, apiKey, version, type){
    
    cy.get(popupJobName).type(jobName)
    cy.get(popupApiKey).type(apiKey)
    cy.get(popupVersion).type(version)
    cy.get(popupTypeDropdown + " select").select(type)
    cy.get(popupTypeDropdown + " select option:selected").should("have.text", type)
}

export function saveTestJob(){
    cy.get(saveJobBtn).should("be.visible")
    cy.get(saveJobBtn).should("be.enabled")
    cy.get(saveJobBtn).click()
}

export function closePopup(){
    cy.get(popupCloseLink).should("be.visible")
    cy.get(popupCloseLink).click()
}