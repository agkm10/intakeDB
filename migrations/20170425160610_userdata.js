
exports.up = function(knex, Promise) {
    return knex.schema.createTable('userdata', function(t) {
        t.increments('id').unsigned().primary().notNull();
        t.integer('user_id').references('users.id').notNull().onDelete('cascade');
        t.timestamps(true,true);
        t.json('websites');
        t.string('billingpoc').defaultTo('');
        t.string('billingphonenumber').defaultTo('');
        t.string('billingemail').defaultTo('');
        t.string('billingadd').defaultTo('');
        t.string('billingcity').defaultTo('');
        t.string('billingstate').defaultTo('');
        t.integer('billingzip').defaultTo(0);
        t.string('businessname').defaultTo('');
        t.string('businessadd').defaultTo('');
        t.string('businesscity').defaultTo('');
        t.string('businessstate').defaultTo('');
        t.string('businessemail').defaultTo('');
        t.string('designwho').defaultTo('');
        t.string('designaction').defaultTo('');
        t.string('designurl').defaultTo('');
        t.string('socialfacebook').defaultTo('');
        t.string('socialinstagram').defaultTo('');
        t.string('socialtwitter').defaultTo('');
        t.string('socialyoutube').defaultTo('');
        t.string('sociallinkedin').defaultTo('');
        t.string('socialpinterest').defaultTo('');
        t.string('socialother').defaultTo('');
    })
};

exports.down = function(knex, Promise) {
      return knex.schema.dropTable('userdata');
};
