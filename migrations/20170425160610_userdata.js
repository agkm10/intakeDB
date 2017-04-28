
exports.up = ( knex, Promise ) => {
    return knex.schema.createTable( 'userdata', ( t ) => {
        t.increments( 'id' ).unsigned().primary().notNull();
        t.integer( 'user_id' ).references( 'users.id' ).notNull().onDelete( 'cascade' );
        t.timestamps( true, true );
        t.json( 'websites' ).defaultTo( '[{"text1":"","text2":"","index":0}]' );
        t.string( 'billingpoc' ).defaultTo( '' );
        t.string( 'billingphonenumber' ).defaultTo( '' );
        t.string( 'billingemail' ).defaultTo( '' );
        t.string( 'billingadd' ).defaultTo( '' );
        t.string( 'billingcity' ).defaultTo( '' );
        t.string( 'billingstate' ).defaultTo( '' );
        t.string( 'billingzip' ).defaultTo( '' );
        t.string( 'businessname' ).defaultTo( '' );
        t.string( 'businessadd' ).defaultTo( '' );
        t.string( 'businesscity' ).defaultTo( '' );
        t.string( 'businessstate' ).defaultTo( '' );
        t.string( 'businessemail' ).defaultTo( '' );
        t.string( 'designwho' ).defaultTo( '' );
        t.string( 'designaction' ).defaultTo( '' );
        t.string( 'designurl' ).defaultTo( '' );
        t.string( 'socialfacebook' ).defaultTo( '' );
        t.string( 'socialinstagram' ).defaultTo( '' );
        t.string( 'socialtwitter' ).defaultTo( '' );
        t.string( 'socialyoutube' ).defaultTo( '' );
        t.string( 'sociallinkedin' ).defaultTo( '' );
        t.string( 'socialpinterest' ).defaultTo( '' );
        t.string( 'socialother' ).defaultTo( '' );
        t.string( 'company' ).defaultTo( '' );
        t.string( 'firstname' ).defaultTo( '' );
        t.string( 'lastname' ).defaultTo( '' );
    })
    .then( () => {
        return knex( "userdata" ).insert( [
            { user_id: 1 },
            { user_id: 2 }
        ])
    })
};

exports.down = ( knex, Promise ) => {
      return knex.schema.dropTable( 'userdata' );
};
