/// <reference types="cypress" />

export class SalesDataSetup {

    testCompanyId = 0

    _setupCompany(CompanyName, CompanyType, Phone, Email, CountryId){
        cy.request(
            'PUT', 
            '/Customers/rest/CRMServicesAPI/CompanyCreateOrUpdate', 
            {
                "Company": {
                    "Id": 0,
                    "CompanyName": `${CompanyName}`,
                    "CompanyType": CompanyType,
                    "Phone": `${Phone}`,
                    "Email": `${Email}`,
                    "Fax": "",
                    "Website": "",
                    "Address": "",
                    "PostalCode": "",
                    "City": "",
                    "CountryId": CountryId
                }
            }
        ).then(
            (response) => {
                //Cypress.log('company create output: ' + response.body)
                expect(response.body).to.exist
                this.testCompanyId = response.body
                return response.body
            }
        )
    }

    _teardownCompany(){
        cy.request(
            'DELETE',
            `/Customers/rest/CRMServicesAPI/CompanyDelete?CompanyId=${this.testCompanyId}`
        ).should('have.property', 'status', 200)
    }

}