import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';

dotenv.config(); // Variavel de ambiente

const server = express(); // Cria o servidor

/* Seta o template engine */
server.set('view engine', 'mustache'); // Engine Mustache para o layout
server.set('views', path.join(__dirname, 'views')); // Pastas de visualização do projeto
server.engine('mustache', mustache()); // Seta a engine

/* Para criar a pasta estática public */
server.use(express.static(path.join(__dirname, '../public')));

/* Rotas */
server.use(mainRoutes);
server.use((rec, res) => {
    res.send('Página não encontrada!');
});

/* Roda o servidor */
server.listen(process.env.PORT); 