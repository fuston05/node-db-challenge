const express = require('express');

const router = express.Router();

const projects = require('../data/dataAcess');

//get all projects
router.get('/', (req, res) => {
  projects.findProjects()
    .then(projects => {
      res.status(200).json({ projects });
    })
    .catch(error => {
      res.status(500).json({ error: "Could not process your request" });
    })
});

//get project by ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  projects.findProjectsById(id)
    .then(project => {
      res.status(200).json({ project });
    })
    .catch(error => {
      res.status(500).json({ error: "Could not process your request" });
    })
});

//add projects
router.post('/', (req, res) => {
  projects.addProject(req.body)
    .then(newProj => {
      res.status(200).json({ newProj });
    })
    .catch(error => {
      res.status(500).json({ error: "Could not process your request" });
    })
});

module.exports = router;