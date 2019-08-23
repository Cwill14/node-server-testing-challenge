const router = require('express').Router();

const Dwarves = require('./dwarves-model.js');

router.get('/', (req, res) => {
    Dwarves.getDwarves()
        .then(dwarves => {
            res.status(200).json(dwarves)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

router.post('/', (req, res) => {
    const dwarf = req.body;
    Dwarves.addDwarf(dwarf)
        .then(response => {
            res.status(201).json(response)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    Dwarves.deleteDwarf(id)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

module.exports = router;