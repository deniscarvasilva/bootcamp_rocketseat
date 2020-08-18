const express = require('express');

const app = express();

/**
 * Métodos HTTP
 * GET:         buscar informações do back-end
 * POST:        Criar uma informação
 * PUT/PATCH:   Alterar uma informação
 * DELETE:      Remover uma informação
 */

app.get('/projects', (request, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 2'
    ]);
})

app.post('/projects', (request, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3'
    ]);
})

app.put('/projects/:id', (request, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3'
    ]);
})

app.delete('/projects/:id', (request, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 3'
    ]);
})

app.listen(3333, () => {
    console.log('🐱‍🏍Back-end started! ####');
});