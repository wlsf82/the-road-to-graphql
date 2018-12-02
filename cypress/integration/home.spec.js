describe("The Road To GraphQL", () => {
  beforeEach(() => cy.visit("http://localhost:3000/"));

  it('has title "React GraphQL GitHub Client"', () => {
    cy.get("h1").should("contain", "React GraphQL GitHub Client");
  });
});
