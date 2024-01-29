describe('Автотест логин пароль (позитивный )', function () {
   it('Верный логин верный пароль', function () {
        cy.visit('https://login.qa.studio');//зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru ')//верный логин
        cy.get('#pass').type('iLoveqastudio1')//верный пароль
        cy.get('#loginButton').click()//нажатие на кнопку войти
        cy.get('#messageHeader').should('be.visible') // текст виден
        cy.get('#messageHeader').contains('Авторизация прошла успешно')//совпадение текста
    })

   it('Востановление пароля', function () {
        cy.visit('https://login.qa.studio');//зашли на сайт
        cy.get('#forgotEmailButton').click()//нажали забыли пароль
        cy.get('#mailForgot').type('german@dolnikov.ru')//вводим почту 
        cy.get('#restoreEmailButton').click()//нажали по кнопке отправить код
        cy.get('#messageHeader').should('be.visible')//текст виден
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail')//совпадение текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')//крестик виден
    })

})
