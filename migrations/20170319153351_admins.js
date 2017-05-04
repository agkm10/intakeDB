exports.up = function(knex, Promise) {
    return knex.schema.createTable('admins', function(t) {
        t.increments('id').unsigned().primary().notNull();
        t.timestamps(true,true);
        t.string('firstname',20).notNull();
        t.string('lastname',20).notNull();
        t.string('company',20)
        t.string('email').notNull().unique();
        t.string('password_hash').notNull();
    })
    .then(function (){
        return knex("admins").insert([
            { firstname: "Mr", lastname: "Watson", company: "intakeAI", email: "1@1.com", password_hash: "$2a$10$uCBSFHeYHgEBDbS/Cf9guOCmzkzt6ujnBqc5s9TzU0DYVRw.vLc0a"},
            { firstname: "admin2fn", lastname: "admin2ln", company: "admin2comp", email: "2@2.com", password_hash: "$2a$10$uCBSFHeYHgEBDbS/Cf9guOCmzkzt6ujnBqc5s9TzU0DYVRw.vLc0a"}
        ])
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('admins');
};
