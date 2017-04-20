exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(t) {
        t.increments('id').unsigned().primary().notNull();
        t.timestamps(true,true);
        t.string('firstname',20).notNull();
        t.string('lastname',20).notNull();
        t.string('company',20)
        t.string('email').notNull().unique();
        t.string('password_hash').notNull();
        t.integer('admin_id').references('admins.id').notNull().onDelete('cascade');
    })
    .then(function (){
        return knex("users").insert([
            { firstname: "user1fn", lastname: "user1ln", company: "user1comp", email: "1@1.com", password_hash: "$2a$10$uCBSFHeYHgEBDbS/Cf9guOCmzkzt6ujnBqc5s9TzU0DYVRw.vLc0a", admin_id:1},
            { firstname: "user2fn", lastname: "user2ln", company: "user2comp", email: "2@2.com", password_hash: "$2a$10$uCBSFHeYHgEBDbS/Cf9guOCmzkzt6ujnBqc5s9TzU0DYVRw.vLc0a", admin_id:1}
        ])
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
};
