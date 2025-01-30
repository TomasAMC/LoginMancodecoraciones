it('Debe iniciar sesión correctamente con credenciales válidas', () => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:3000/login',  // Asegúrate de que la URL sea correcta
      body: {
        usuario: 'tomas',  // Cambia estos valores con las credenciales correctas de tu base de datos
        clave: '123'       // Cambia esta contraseña según los datos almacenados
      },
      failOnStatusCode: false  // Evitar que Cypress falle automáticamente por un código de estado no 2xx
    }).then((response) => {
      expect(response.status).to.eq(200); // Esperamos un código 200 si las credenciales son correctas
      expect(response.body).to.include('Inicio correctamente');  // Asegúrate de que la respuesta sea correcta
    });
  
    // Opcional: Verificar la redirección o comportamiento posterior al inicio de sesión
    cy.visit('http://localhost:3000/conversor');  // Verifica si redirige correctamente al conversor
  });
  