exports.up = function(knex, Promise) {
    return knex.schema.createTable('chats', function(t) {
        t.increments('id').unsigned().primary().notNull();
        t.timestamps(true,true);
        t.integer('user_id').references('users.id').notNull().onDelete('cascade');
        t.integer('admin_id').references('admins.id').notNull().onDelete('cascade');
        t.unique(['user_id', 'admin_id']);
    })
    .then(function(){
        return knex('chats').insert([
            {user_id:1,admin_id:1},
            {user_id:2,admin_id:1}
        ])
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('chats');
};
