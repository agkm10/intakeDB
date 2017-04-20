exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', function(t) {
        t.increments('id').unsigned().primary().notNull();
        t.timestamps(true,true);
        t.integer('user_id').references('users.id').notNull().onDelete('cascade');
        t.unique(['id', 'user_id']);
    })
    .then(function(){
        return knex("projects").insert([
            {user_id: 1},
            {user_id: 2}
        ])
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('projects');
};
