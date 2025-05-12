const { getData , addData } = require('../models/listModel')
const express = require('express');
const router = express.Router();

router.get('/tasks', async (req , res) => {
    const tasks = await getData ();
    res.json(tasks);
});

router.post('/addtasks', async (req , res) => {
    const {description} = req.body;
    await addData(description);
    res.status(201).send ('Tarea añadida')
});

module.exports = router;