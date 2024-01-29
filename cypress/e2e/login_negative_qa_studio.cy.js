describe('Автотест логин пароль (негативный)', function () {
   it('Верный логин неверный пароль', function () {
        cy.visit('https://login.qa.studio');//зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru ')//верный логин
        cy.get('#pass').type('iLoveqastudio2')//неверный пароль
        cy.get('#loginButton').click()//нажатие на кнопку войти
        cy.get('#messageHeader').should('be.visible') // текст виден
        cy.get('#messageHeader').contains('Такого логина или пароля нет')//совпадение текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')//крестик виден
    })
   it('Неверный логин верный пароль', function () {
        cy.visit('https://login.qa.studio');//зашли на сайт
        cy.get('#mail').type('german@dolnikovvvv.ru ')//неверный логин
        cy.get('#pass').type('iLoveqastudio1')//верный пароль
        cy.get('#loginButton').click()//нажатие на кнопку войти
        cy.get('#messageHeader').should('be.visible') // текст виден
        cy.get('#messageHeader').contains('Такого логина или пароля нет')//совпадение текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')//крестик виден
    })
   it('Ошибка валидации в логине и верный пароль', function () {
        cy.visit('https://login.qa.studio');//зашли на сайт
        cy.get('#mail').type('germandolnikovvvv.ru ')//неверный логин без @
        cy.get('#pass').type('iLoveqastudio1')//верный пароль
        cy.get('#loginButton').click()//нажатие на кнопку войти
        cy.get('#messageHeader').should('be.visible') // текст виден
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации')//совпадение текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')//крестик виден
    })
   it('Проверка строчных букв в логине и верный пароль', function () {
        cy.visit('https://login.qa.studio');//зашли на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru')//верный логин но с заглавными и строчными буквами
        cy.get('#pass').type('iLoveqastudio1')//верный пароль
        cy.get('#loginButton').click()//нажатие на кнопку войти
        cy.get('#messageHeader').should('be.visible') // текст виден
        cy.get('#messageHeader').contains('Такого логина или пароля нет')//совпадение текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')//крестик виден
    })
})
