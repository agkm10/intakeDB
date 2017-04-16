exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(t) {
        t.increments('id').unsigned().primary().notNull();
        t.timestamps(true,true);
        t.integer('user_id').references('users.id').notNull().onDelete('cascade');
        t.unique(['id', 'user_id']);
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('projects');
};
