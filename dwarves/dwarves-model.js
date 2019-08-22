const db = require('../data/dbConfig.js');

module.exports = {
    getDwarves,
    addDwarf,
    deleteDwarf
}

function getDwarves() {
    return db('dwarves');
}


function addDwarf(dwarf) {
    return db('dwarves').insert(dwarf)
}


function deleteDwarf(id) {
    return db('dwarves')
        .where({ id })
        .del()
}