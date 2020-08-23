import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import './App.css';
import api from './services/api';

function App() {

    const [projects, setProjects] = useState([]);
    useEffect(() => {
        api.get('/projects').then(response => {
            setProjects(response.data);
        });
    }, []);
    async function handleAddProject() {
        
        const response = await api.post('projects', {
            title: `Novo Projeto: ${Date.now()}`,
            owner: "Denis Carvalho"
        });

        console.log(response);
        
        const project = response.data;
        setProjects([...projects, project]);
    }
    return (
        <>
            <Header title="Projects">

            </Header>
            <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
            <ul>
                {projects.map(project => <li key={project.id}>{project.title}</li>)}
            </ul>
        </>
    );
}

export default App;
