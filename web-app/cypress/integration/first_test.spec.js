describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true)
    })
})

describe('My Second Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(false)
    })
})

describe('My Third Test', () => {
    it('Visits my awesome website', () => {
      cy.visit('http://localhost:3000/')
    })
})