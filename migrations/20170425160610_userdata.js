
exports.up = function(knex, Promise) {
    return knex.schema.createTable('userdata', function(t) {
        t.increments('id').unsigned().primary().notNull();
        t.integer('user_id').references('users.id').notNull().onDelete('cascade');
        t.timestamps(true,true);
        t.string('billingpoc');
        t.string('billingphonenumber');
        t.string('billingemail');
        t.string('billingadd');
        t.string('billingcity');
        t.string('billingstate');
        t.integer('billingzip');
        t.string('businessname');
        t.string('businessadd');
        t.string('businesscity');
        t.string('businessstate');
        t.string('businessemail');
        t.string('designwho');
        t.string('designaction');
        t.string('designurl');
        t.string('socialfacebook');
        t.string('socialinstagram');
        t.string('socialtwitter');
        t.string('socialyoutube');
        t.string('sociallinkedin');
        t.string('socialpinterest');
        t.string('socialother');
    })
};

exports.down = function(knex, Promise) {
      return knex.schema.dropTable('userdata');
};
