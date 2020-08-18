const express = require('express');

const app = express();
app.use(express.json());

/**
 * Métodos HTTP
 * GET:         buscar informações do back-end
 * POST:        Criar uma informação
 * PUT/PATCH:   Alterar uma informação
 * DELETE:      Remover uma informação
 */

/**
 * Tipos de parametros
 * Query params:   Principalmente para filtros e paginação
 * Route Params:   identificar recursos (atualizar deletar etc)
 * Request body:   conteúdo na hora de criar conteudo
 */

app.get('/projects', (request, response) => {
    const { title, base } = request.query;

    console.log(title);
    console.log(base);

    return response.json([
        'Projeto 1',
        'Projeto 2'
    ]);
})

app.post('/projects', (request, response) => {
    const body = request.body;
    console.log(body);
    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3'
    ]);
})

app.put('/projects/:id', (request, response) => {
    //const {id} = request.params;
    const params = request.params;
    console.log(params);

    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3'
    ]);
})

app.delete('/projects/:id', (request, response) => {
    //const {id} = request.params;
    const params = request.params;
    console.log(params);
    return response.json([
        'Projeto 1',
        'Projeto 3'
    ]);
})

app.listen(3333, () => {
    console.log('🐱‍🏍Back-end started! ####');
});