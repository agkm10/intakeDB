exports.up = function(knex, Promise) {
  return knex.schema.createTable('messages', function(t) {
        t.increments('id').unsigned().primary().notNull();
        t.timestamps();
        t.integer('user_id').references('users.id').notNull().onDelete('cascade');\
        t.string('message').notNull();
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
