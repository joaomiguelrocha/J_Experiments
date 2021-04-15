/// <reference types="cypress" />

// ######## AppliTools ABSTRACTION #####################################################

export function setupEyes(_appName, _batchName){
    cy.eyesOpen({appName: _appName, batchName: _batchName})
}

export function closeEyes(){
    cy.eyesClose()
}

// ######## iFrame ABSTRACTION #########################################################

function getIframeDocument (src) {
    return cy
    .get('iframe[src*='+src+']')
    .its('0.contentDocument.body').should('not.be.empty')
  }
  
  export function getIframeBody(src) {
    return getIframeDocument(src)
    .then(cy.wrap)
  }

// ######## Traditional WEB Setup ABSTRACTION ###########################################

export function ensureTraditionalWebRequiredCookiesEnabled(){
    Cypress.Cookies.preserveOnce('Users.sid','osVisitor', 'ASP.NET_SessionId')
}

// ######## LOCATOR ABSTRACTION #########################################################
export function getByOsId(osId) {
   return cy.get(`*[Id$=${osId}]`)
}

export function getByElementAndOsId(htmlElem, osId) {
    return cy.get(`${htmlElem}[Id$=${osId}]`)
}

export function getByElementOsIdAndIndex(htmlElem, osId, index) {
    return cy.get(`${htmlElem}[Id$=${osId}]:nth-child${index + 1}`)
}

export function getByOsIdWithAnchor(anchorOsId, osId) {
    return cy.get(`*[Id$=${anchorOsId}] *[Id$=${osId}]`)
}

export function getByElementAndOsIdWithAnchor(anchorOsId, htmlElem, osId) {
    return cy.get(`*[Id$=${anchorOsId}] ${htmlElem}[Id$=${osId}]`)
}

export function getByElementOsIdAndIndexWithAnchor(anchorOsId, htmlElem, osId, index) {
    return cy.get(`*[Id$=${anchorOsId}] ${htmlElem}[Id$=${osId}]:nth-child${index + 1}`)
}

