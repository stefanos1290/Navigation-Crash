describe('renders screen A', () => {
    it('renders correctly', () => {
            cy.visit('http://localhost:3001/');
            cy.get('.screenA_container').should('be.visible');
    })
})

describe('renders B1 flow', () => {
    it('renders correctly', () => {
            cy.visit('http://localhost:3001/screenB1');
            cy.get('.screenB1_title').should('have.text', 'SCREEN B1');
            cy.get('#demo-simple-select-autowidth').click();
            cy.get('#choiceB').click();
            cy.get('.nextPage_link').click();
            cy.location().should((loc) => {
                expect(loc.pathname).to.eq('/screenC1');
            });
            cy.get('.screenC1_container').should('exist');
            cy.get('.screenC1_title').should('have.text', 'Screen C1');
            cy.get('.C1_choice_text').should('have.text', 'Choice B');
            cy.get('.C1_message').should('be.visible');
            cy.get('.prevPage_link').click();
            cy.get('#demo-simple-select-autowidth').click();
            cy.get('#choiceA').click();
            cy.get('.nextPage_link').click();
            cy.location().should((loc) => {
                expect(loc.pathname).to.eq('/screenC1');
            });
            cy.wait(5000);
            cy.location().should((loc) => {
                expect(loc.pathname).to.eq('/screenD');
            });
            cy.get('.screenC1_container').should('exist')
    })
})

describe('renders B2 flow', () => {
    it('renders correctly', () => {
            cy.visit('http://localhost:3001/screenB2');
            cy.get('.screenB2_title').should('have.text', 'Screen B2');
            cy.get('#2').click();
            cy.get('.nextPage_link').click();
            cy.location().should((loc) => {
                expect(loc.pathname).to.eq('/screenC2');
            });
            cy.get('.screenC2_container').should('exist');
            cy.get('.screenC2_title').should('have.text', 'Screen C2');
            cy.get('.C2_message').should('be.visible');
            cy.get('.prevPage_link').click();
            cy.get('#1').click();
            cy.get('.nextPage_link').click();
            cy.location().should((loc) => {
                expect(loc.pathname).to.eq('/screenC2');
            });
            cy.wait(5000);
            cy.location().should((loc) => {
                expect(loc.pathname).to.eq('/screenD');
            });
            cy.location().should((loc) => {
                expect(loc.pathname).to.eq('/screenD');
            });
            cy.get('.screenC1_container').should('exist')
    })
})

describe('renders B3 flow', () => {
    it('renders correctly', () => {
            cy.visit('http://localhost:3001/screenB3');
            cy.get('.screenB3_title').should('have.text', 'Screen B3');
            cy.get('.b3_text').should('be.visible')
            cy.get('.nextPage_link').click();
            cy.location().should((loc) => {
                expect(loc.pathname).to.eq('/screenC2');
            });
            cy.get('.screenC2_container').should('exist');
            cy.get('.screenC2_title').should('have.text', 'Screen C2');
            cy.get('.C2_message').should('be.visible');
            cy.wait(5000);
            cy.location().should((loc) => {
                expect(loc.pathname).to.eq('/screenD');
            });
            cy.location().should((loc) => {
                expect(loc.pathname).to.eq('/screenD');
            });
            cy.get('.screenC1_container').should('exist')
    })
})

