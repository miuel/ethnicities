describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000") 
  })

  it("should show the form", () => {
    cy.get('form').should('exist')
    cy.get('input[type="email"]').should('exist')
    cy.get('input[type="password"]').should('exist')
    cy.get('button[type="submit"]').should('exist')
  })

  it("should contain the heading", () => {
    cy.contains("Human").should("exist")
    cy.contains("Ethnicities").should("exist")
  })

  it("should load the Ethnicities images", () => {
    cy.get('img[alt*="Description"]').should('have.length.at.least', 1)
  })

  it("should load my porfolio", () => {
    cy.contains("Miguel Rivas").should("have.attr", "href").and("include", "vercel.app")
  })
})
