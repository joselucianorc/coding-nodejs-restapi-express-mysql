module.exports = app => {    
    app.get('/agenda', (req, res) => {
        res.send('Servidor rodando, tudo ok')
    })
    app.post('/agenda', (req, res) => {
        console.log(req.body)
        res.send('Post enviado')
    })
}
