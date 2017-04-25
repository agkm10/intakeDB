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
            {chat_id:1,user_id:1,message:'yo man',type:'user',read:true},
            {chat_id:1,user_id:1,message:'hey buddy',type:'admin',read:true},
            {chat_id:1,user_id:1,message:'i had a question on this one thing',type:'user',read:true},
            {chat_id:1,user_id:1,message:'if you have a second',type:'user',read:true},
            {chat_id:1,user_id:1,message:'of course shoot',type:'admin',read:true},
            {chat_id:1,user_id:1,message:'i was trying to type in this chat but it keeps giving me chuck norris jokes',type:'user',read:true},
            {chat_id:1,user_id:1,message:'and...',type:'admin',read:true},
            {chat_id:1,user_id:1,message:'watson is just chuck norris subconscious',type:'admin',read:false},
            {chat_id:2,user_id:2,message:'yo dad',type:'user',read:true},
            {chat_id:2,user_id:2,message:'hey son',type:'admin',read:true},
            {chat_id:2,user_id:2,message:'im concerned about this weekend',type:'user',read:true},
            {chat_id:2,user_id:2,message:'you really think we should prank mom like that',type:'user',read:true},
            {chat_id:2,user_id:2,message:'whats your specific issue?',type:'admin',read:false},
            {chat_id:2,user_id:2,message:'just pranking someone based on their number of limbs seems like a poor choice',type:'user',read:false},
            {chat_id:2,user_id:2,message:'you know what you are right',type:'admin',read:false},
            {chat_id:2,user_id:2,message:'ill just make her dinner',type:'admin',read:false}
        ])
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('messages');
};
