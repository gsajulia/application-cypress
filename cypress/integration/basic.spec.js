/// <reference types="cypress" />

describe("cypress basic", () => {
    it("should visit a page and assert title", () => {
        cy.visit("https://www.wcaquino.me/cypress/componentes.html");

        cy.title().should("be.equal", "Campo de Treinamento");
        cy.title().should("contain", "Campo");

        cy.title()
            .should("be.equal", "Campo de Treinamento")
            .and("contain", "Campo");
    });

    it("Should find and interact with an element", () => {
        cy.visit("https://www.wcaquino.me/cypress/componentes.html");

        cy.get("#buttonSimple").click();
        cy.get("#buttonSimple").should("have.value", "Obrigado!");
    });
});
