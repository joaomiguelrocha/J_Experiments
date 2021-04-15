/// <reference types="cypress" />

import * as osAbstractions from '../cypress-OS-abstractions/os-selector-abstractions.js'

// #######################################################################################
// interactions
// #######################################################################################

export function click(osId){
    osAbstractions.getByElementAndOsId('*', osId).click()
}

export function clickByInnerText(innerText){
    cy.contains(innerText).click()
}

export function doubleClick(osId){
    osAbstractions.getByElementAndOsId('*', osId).dblclick()
}

export function clear(osId){
    osAbstractions.getByElementAndOsId('*', osId).clear()
}

export function setText(osId, text){
    osAbstractions.getByElementAndOsId('*', osId).type(text)
}

export function clickElem(htmlPath, osId){
    osAbstractions.getByElementAndOsId(htmlPath, osId).click()
}

export function clearElem(htmlPath, osId){
    osAbstractions.getByElementAndOsId(htmlPath, osId).clear()
}

export function doubleClickElem(htmlPath, osId){
    osAbstractions.getByElementAndOsId(htmlPath, osId).dblclick()
}

export function setTextElem(htmlPath, osId, text){
    osAbstractions.getByElementAndOsId(htmlPath, osId).type(text)
}

// #######################################################################################
// assertions
// #######################################################################################

export function assertVisibleElem(htmlPath, osId){
    osAbstractions.getByElementAndOsId(htmlPath, osId).should('be.visible')
}

export function assertVisibleByInnerText(innerText){
    cy.contains(innerText).should('be.visible')
}