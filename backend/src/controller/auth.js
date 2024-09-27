//GET -> Busca
//POST -> Salvar/Leva
//PUT -> Atualiza/Leva
//DELETE -> Deleta
/* PACTH -> atualiza/salvar */

//POST
/*dados = {
    nomeCompleto: RINALDO,
    curso: admin,
    turma: A,
    turno: noturno,
    email: teste@gmail.com,
    senha: 123334,
    telefone: 11941984560
}*/

//Login exige descrição de dados e descrição de dados só existe no POST e no PUT
//DELETE -> id: 1
// DELETE -> HTTPS 201 (NO CONTENT)
//GET -> id: 1
//GET <--
/*dados = {
    id: 1,
    nomeCompleto: rINALDO,
    curso: admin,
    turma: A,
    turno: noturno,
    email: teste@gmail.com,
    senha: 123334,
    telefone: 11941984560
}*/
//POST --> enviar os dados
//POST --> não se importa em receber algo
//PROTOCOLO HTTPS 201 (NO CONTENT) -> Sucesso, sem conteudo

//PUT -> https//:www.teste.com/27 <<---->> id: 27 --> Pega pelo req.params
//PUT -> body igual à  
/*dados = {
    nomeCompleto: Guilherme,
}*/
//PUT -> Pode ou não retorna se retorna protocolo HTTPS 200 e mensagem se não 201 (NO CONTENT)

import express from 'express';
import Validation from '../../utils/validation/index.js';
import db from '../../config/db.js';
    
const valid = new Validation()
const router = express.Router();

router.post('/cadastro', (req, res) => {
    const { nomeCompleto, telefone, curso, turma, turno, email, senha } = req.body;
    const data = {
        nomeCompleto,
        telefone,
        curso,
        turma,
        turno,
        email,
        senha
    }
    //*const existError = valid.validationDataExist([{ nomeCompleto, telefone, curso, turma, turno, email, senha }]);
    //if (existError) return res.status(400).send(existError);

    //const validEmail = valid.validationEmail(email);
    //if (validEmail) return res.status(400).send(validEmail);

    //const validTelefone = valid.validationTel(telefone); // Corrigido para validar telefone
    //if (validTelefone) return res.status(400).send(validTelefone);
    const sql = 'INSERT INTO usuarios (nomeCompleto, telefone, curso, turma, turno, email, senha) VALUES (?, ?, ?, ?, ?, ?, ?)';

    db.query(sql, [nomeCompleto, telefone, curso, turma, turno, email, senha], (err, result) => {
        if (err) {
            console.log('Erro ao inserir no banco de dados:', err);
            res.status(500).send('Erro ao cadastrar');
        } else {
            res.send('Cadastro realizado com sucesso!');
        }
    });
});
// rota de login
router.post('/login', (req, res) => {
    const { email, senha } = req.body;

    const sql = 'SELECT * FROM usuarios WHERE email = ?';
    db.query(sql, [email], (err, results) => {
        if (err) {
            return res.status(500).send('Erro ao consultar o banco de dados.');
        }
        if (results.length === 0) {
            return res.status(401).send('Email ou senha incorretos.');
        }

        const user = results[0];
        // Verificar senha (descomente se usar bcrypt)
        bcrypt.compare(senha, user.senha, (err, match) => {
            if (err || !match) {
                return res.status(401).send('Email ou senha incorretos.');
            }
            // Login bem-sucedido
            res.send('Login bem-sucedido!');
        });
    });
});


export default router   