const customExpress = require('./config/custom-express')
const conexao = require('./infrastructure/conexao')
const tabelas = require('./infrastructure/tabelas')

conexao.connect((erro) => { 
    if (erro) {
        console.log(erro) 
    } else {
        const app = customExpress()
        tabelas.init(conexao)
        //tabelas.criarAtendimento
        app.listen(3000, () => console.log('Servidor rodando na porta: 3000'))        
        console.log('Conectado com sucesso')
    }
}) 
