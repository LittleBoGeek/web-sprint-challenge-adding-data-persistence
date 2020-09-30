const express = require('express')
const db = require('../data/db-config')

const router = express.Router();

router.get('/', (req,res) => {
db('projects')
.then( projects => {
    res.json(projects)
})
.catch(err => {
    res.status(500).json({message:"There was an error retrieving the projects"})
})    
})

router.get('/resources', (req,res) => {
    db('resources')
    .then(resources => {
        res.json(resources)

    }) .res.status(500). json({message:'There was an error'})
})


router.get('/tasks', (req,res) => {
    db('tasks')
    .then( tasks => {
        res.json(tasks)
    }) .catch(err => {
        res.status(500).json({message:'There was an error'})
    })
})

router.post("/", (req, res) => {
    db('projects').insert(req.body)
    .then((projects) => {
        res.status(201).json({message:"success"})
    }) .catch((err) => {
        res.status(500).json({message:"there was an error", err})
    })
})

router.post("/resources", (req, res) => {
    db('resources').insert(req.body)
    .then((resources) => {
        res.status(201).json({message:"success"})
    }) .catch((err) => {
        res.status(500).json({message:"there was an error", err})
    })
})

router.post("/tasks", (req, res) => {
    db('tasks').insert(req.body)
    .then((resources) => {
        res.status(201).json({message:"success"})
    }) .catch((err) => {
        res.status(500).json({message:"there was an error", err})
    })
})




