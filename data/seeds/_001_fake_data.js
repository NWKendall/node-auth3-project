
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      const seedUsers = [  
        { username: 'Nic', password: 'test', department: 'admin' },
        { username: 'Giulianna', password: 'test', department: 'user' }
      ]
      return knex('users').insert(seedUsers);
    });
};
