
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('dwarves').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dwarves').insert([
        { name: 'Gimli'},
        { name: 'Thorin'},
        { name: 'Balin'},
      ]);
    });
};
