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
    const { title } = request.query;

    const results = title ?
        projects.filter(project => project.title.includes(title)) :
        projects;

    return response.json(results);
})

app.post('/projects', (request, response) => {
    const { title, owner } = request.body;

    const project = { id: uuid(), title, owner };

    projects.push(project);

    return response.json(project);
})

app.put('/projects/:id', (request, response) => {
    const { id } = request.params;
    const { title, owner } = request.body;

    const projectPos = projects.findIndex(project => project.id == id);

    if (projectPos < 0) {
        return response.status(400).json({ error: 'Project not found!' });
    }

    const project = {
        id,
        title,
        owner
    }

    projects[projectPos] = project;

    return response.json(project);
})

app.delete('/projects/:id', (request, response) => {
    const { id } = request.params;

    const projectPos = projects.findIndex(project => project.id == id);

    if (projectPos < 0) {
        return response.status(400).json({ error: 'Project not found!' });
    }

    projects.splice(projectPos, 1);

    return response.status(204).send();
})

app.listen(3333, () => {
    console.log('🐱‍🏍Back-end started! ####');
});