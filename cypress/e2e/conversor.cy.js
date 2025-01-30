describe('Prueba de Conversor', () => {
  it('Verifica la visibilidad de los elementos', () => {
    cy.visit('http://localhost:3000');
    cy.log('Esperando a que la página cargue completamente...');
    cy.get('#textoAvoz', { timeout: 15000 }).should('be.visible').debug();
    cy.get('button').contains('Convertir').should('be.visible').debug();
  });
});
