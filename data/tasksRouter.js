const express = require('express');

const router = express.Router();

const tasks = require('../data/dataAcess');

//get all tasks
router.get('/', (req, res) => {
  tasks.findTasks()
    .then(tasks => {
      res.status(200).json({ tasks });
    })
    .catch(error => {
      res.status(500).json({ error: "Could not process your request" });
    })
});

//add tasks
router.post('/', (req, res) => {
  tasks.addTask(req.body)
    .then(newTask => {
      res.status(200).json({ newTask });
    })
    .catch(error => {
      res.status(500).json({ error: "Could not process your request" });
    })
});

module.exports = router;