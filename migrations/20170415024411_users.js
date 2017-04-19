exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(t) {
        t.increments('id').unsigned().primary().notNull();
        t.timestamps(true,true);
        t.string('firstname',20).notNull();
        t.string('lastname',20).notNull();
        t.string('company',20)
        t.string('email').notNull().unique();
        t.string('password_hash').notNull();
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
