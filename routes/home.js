module.exports = app => {
    const { HomeController } = app.controllers

    app.get('/', HomeController.index)
    app.post('/entrar', HomeController.login)
    app.get('/sair', HomeController.logout)
}