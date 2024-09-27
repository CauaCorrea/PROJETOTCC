import app from './config/index.js'
import db from './config/db.js'

(function () {
  app.listen(3006, () => {
    console.log('Servidor rodando na porta 3006');       
  });

  db.connect((err) => {
    console.log('Banco de dados conectado');
  });
}())

