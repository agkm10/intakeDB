exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(t) {
        t.increments('id').unsigned().primary().notNull();
        t.timestamps(true,true);
        t.string('username',20).notNull().unique();
        t.string('email').notNull().unique();
        t.string('password_hash').notNull();
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
