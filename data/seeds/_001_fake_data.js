
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      const seedUsers = [  
        { username: 'Nic', password: 'test' },
        { username: 'Giulianna', password: 'test' }
      ]
      return knex('users').insert(seedUsers);
    });
};
