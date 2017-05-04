exports.up = function(knex, Promise) {
    return knex.schema.createTable('messages', function(t) {
        t.increments('id').unsigned().primary().notNull();
        t.timestamps(true,true);
        t.integer('chat_id').references('chats.id').notNull().onDelete('cascade');
        t.integer('user_id').references('users.id').notNull().onDelete('cascade');
        t.string('message').notNull();
        t.string('type').notNull();
        t.boolean('read').notNull().defaultTo(false);
    })
    .then(function(){
        return knex('messages').insert([
            {chat_id:1,user_id:1,message:'Hi! Welcome to Goldsage!',type:'admin',read:true},
            {chat_id:1,user_id:1,message:'Let me know if you have any questions',type:'admin',read:true},
            {chat_id:1,user_id:1,message:`Yeah I asked the AI but I'm still not sure how to enter the url`,type:'user',read:true},
            {chat_id:1,user_id:1,message:`If Watson can't help you, you're doomed`,type:'admin',read:true},
            {chat_id:1,user_id:1,message:'Really?',type:'user',read:false},
            {chat_id:1,user_id:1,message:'Nope just a nerdy joke',type:'admin',read:false},
            {chat_id:2,user_id:2,message:'Hi! Welcome to Goldsage!',type:'admin',read:true},
            {chat_id:2,user_id:2,message:'I think I got an account here by mistake',type:'user',read:true},
            {chat_id:2,user_id:2,message:`Impossible haven't made a mistake since 1986`,type:'admin',read:true},
            {chat_id:2,user_id:2,message:'Actually we were contacted by your CEO to help you with new customer onboarding',type:'admin',read:false},
            {chat_id:3,user_id:3,message:'Hi! Welcome to Goldsage!',type:'admin',read:true},
            {chat_id:3,user_id:3,message:'Hi - I wanted to try out your product to see if it would be customizable enough for our onboarding process',type:'user',read:true},
            {chat_id:3,user_id:3,message:`Our custom intakeAI can be custom tailored to any onboarding process - let's meet and review the details`,type:'admin',read:false}
        ])
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('messages');
};
