/// <reference types="cypress" />

import * as osInteractions from '../../cypress-OS-abstractions/os-interactions.js'

const _logoutLnk = 'LogoutLnk'

export function navigateDashboard(){
    osInteractions.clickByInnerText('Dashboard')
}

export function navigateContacts(){
    osInteractions.clickByInnerText('Contacts')
}

export function navigateCompanies(){
    osInteractions.clickByInnerText('Companies')
}

export function navigateOpportunities(){
    osInteractions.clickByInnerText('Opportunities')
}

export function navigateMore(){
    osInteractions.clickByInnerText('More')
}

export function navigateHistory(){
    osInteractions.clickByInnerText('History')
}
export function navigateQuarterQuotas(){
    osInteractions.clickByInnerText('Quarter Quotas')
}

export function navigateClosedOpportunities(){
    osInteractions.clickByInnerText('Closed Opportunities')
}

export function ensureLogoutVisible(){
    osInteractions.assertVisibleElem('a', _logoutLnk)
}

export function clickLogout(){
    osInteractions.clickElem('a', _logoutLnk)
}