exports.up = function(knex, Promise) {
  return knex.schema.createTable('components', function(t) {
        t.increments('id').unsigned().primary().notNull();
        t.timestamps();
        t.integer('user_id').references('components.id').notNull().onDelete('cascade');
        t.string('title').notNull();
        t.string('data').notNull();
        t.string('project_id').notNull().onDelete('cascade');
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('components');
};
