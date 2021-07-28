const atendimentoRepository = require('../model/atendimento-repository')

module.exports = app => {    
    app.get('/agenda', (req, res) => {
        res.send('Servidor rodando, tudo ok')
    })
    app.post('/agenda', (req, res) => {
        const atendimento = req.body
        atendimentoRepository.adiciona(atendimento)
        console.log(req.body)
        res.send('Post enviado')
    })
}
