import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';

dotenv.config(); // Recebe as configurações do local onde está hospedado(variáveis de ambiente)

const server = express(); // usa as funções da biblioteca express

// Configurando o template Engine (mustache)
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname,'views')) // Path para direcionar para a pasta views independete de onde o projeto esteja Hospedado
server.engine('mustache',mustache());
// ---------------------------------------//

server.use(express.static(path.join(__dirname,'../public'))); // Direciona o acesso à pasta pública

// Rotas

server.listen(process.env.PORT);


