const conexao = require('../infrastructure/conexao')
const moment = require('moment')

class AtendimentoRepository {
    adiciona(atendimento) {        
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        const atendimentoDatado = {...atendimento, dataCriacao, data}
        
        const sql = 'INSERT INTO atendimento SET ?'
        conexao.query(sql, atendimentoDatado, (erro, resultados) => {
            
            if (erro) {
                console.log(erro)
            } else {
                console.log(resultados)
            }
        })
    }
}

module.exports = new AtendimentoRepository()