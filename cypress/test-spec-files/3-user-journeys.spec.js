/// <reference types="cypress" />

import * as loginPage from "../test-management-tool/page-objects/login-page"
import * as topMenu from "../test-management-tool/page-objects/top-menu"
import * as homePage from "../test-management-tool/page-objects/homepage"
import * as projectDashboardPage from "../test-management-tool/page-objects/project-dashboard"
import * as testJobDetailsPage from "../test-management-tool/page-objects/testjob-details"


describe('Manage BDD Test Projects homepage journeys', () => {
    var data = {}
    before(()=>{
        cy.fixture('login-feature.json').then((testData) => {
            data = testData
        })

        cy.visit("/BDDTestSuiteManager/")

    })

    it('should be able to login successfully', () => {
        loginPage.fillCredentials(data.username, data.password, true)
        loginPage.clickLogin()
        topMenu.assertDisplayName(data.displayName)
    })

    it("should be able to create a new project", () => {
        homePage.newProjectPopup()
        homePage.setNewProjectData(data.testProjName)
        homePage.saveNewProject()
    })

    it("should be able to search and find the created project", () => {
        homePage.searchProj(data.testProjName)
        homePage.assertProjData(data.testProjName, 1, true, 1)
    })

    it("should be able to navigate to project details", () => {
        // TODO
    })

    it("should be able to go back to homepage", () => {
        // TODO
    })

    it("should be able to successfully find and delete the project", () => {
        homePage.searchProj(data.testProjName)
        homePage.assertProjData(data.testProjName, 1, true, 1)
        homePage.deleteProject(1, true)
        homePage.searchProj(data.testProjName)
        homePage.assertProjectRowsFound(0)
    })

    it('should be able to logout',()=>{
        topMenu.clickLogout()
    })

})

