describe('Verify Stats', ()=>{

    before(() => {
        cy.visit("/signup")
        cy.get('input[type=username]').type('tacekid349')
        cy.get('input[type=password]').eq(0).type('1')
        cy.get('input[type=password]').eq(1).type('1')
        cy.get('button[type=button]').click()
        cy.get('input[type=username]').type('tacekid349')
        cy.get('input[type=password]').type('1')
        cy.get('button[type=button]').click()
        cy.url().should('include', 'lists')
      })

    it('Verify Budget Stats',()=>{
        cy.contains('label', 'Budget Name').next('input').type('Budget 1')
        cy.get('button[type=button]').eq(1).click()
        cy.contains('h3', 'Budget 1').click()
        cy.contains('label', 'Entry Name').next('input').type('Entry 1')
        cy.get('select').select('Food')
        cy.contains('label', 'Amount').next('input').type('200')
        cy.get('button[type=button]').eq(3).click()
        cy.contains('a', 'Statistics').click()
        cy.visit("/stats")
    })

})