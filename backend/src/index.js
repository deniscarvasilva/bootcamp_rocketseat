const express = require('express');
const { uuid } = require('uuidv4');
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

const projects = [];

app.get('/projects', (request, response) => {
    /**
     * const { title, base } = request.query;

    console.log(title);
    console.log(base);
     */

    return response.json(projects);
})

app.post('/projects', (request, response) => {
    const { title, owner } = request.body;

    const project = { id: uuid(), title, owner };

    projects.push(project);

    return response.json(project);
})

app.put('/projects/:id', (request, response) => {
    const { id } = request.params;

    const projectPos = projects.findIndex(project => project.id == id);

    if (projectPos < 0) {
        return response.status(400).json({ error: 'Project not found!' });
    }

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