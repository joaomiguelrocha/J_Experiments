/// <reference types="cypress" />

import * as osAbstractions from '../cypress-OS-abstractions/os-selector-abstractions.js'
import {SalesDataSetup} from '../PageObjects/Sales App/setup-teardown-actions.js'
import * as loginTests from '../TestScenarios/login-tests.js'

describe('Data Driven Suite - Sales - 1080p',{
    retries: {
      runMode: 2,
      openMode: 2,
    },
    viewportWidth: 1920,
    viewportHeight: 1080
  }, ()=>{
    var dataSetup = new SalesDataSetup()
    var record = {}
    before(()=>{
        cy.fixture('sales_data').then((suitedata)=>{
            record = suitedata
        })
    })

    before(()=>{
        dataSetup._setupCompany(record.companyName, record.companyType, record.companyPhone, record.companyEmail, record.countryId)
    })

    beforeEach(()=>{
        cy.visit('/Sales/')
        osAbstractions.ensureTraditionalWebRequiredCookiesEnabled()
    })

    after(()=>{
        dataSetup._teardownCompany()
    })
    
    it('Test with company setup and based on json Data', ()=>{
        loginTests.runTest1(record)
    })
    
    it('Open login page and play around with form', ()=>{
        loginTests.runTest2()
    })
})

describe('Login page suite - Sales - 720p',{
    retries: {
      runMode: 2,
      openMode: 2,
    },
    viewportWidth: 1280,
    viewportHeight: 720
  }, ()=>{

    beforeEach(()=>{
        cy.visit('/Sales/')
        osAbstractions.ensureTraditionalWebRequiredCookiesEnabled()
    })

    
    it('Open login page and play around with form', ()=>{
        loginTests.runTest2()
    })
})

describe('Login page suite - Sales - 1440p',{
    retries: {
      runMode: 2,
      openMode: 2,
    },
    viewportWidth: 2560,
    viewportHeight: 1440
  }, ()=>{

    beforeEach(()=>{
        cy.visit('/Sales/')
        osAbstractions.ensureTraditionalWebRequiredCookiesEnabled()
    })

    
    it('Open login page and play around with form', ()=>{
        loginTests.runTest2()
    })
})

// cypress run --record --key c5f90e41-9fb2-4af5-8a1a-b24ad10935a2