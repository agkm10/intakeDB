exports.up = function(knex, Promise) {
    return knex.schema.createTable('components', function(t) {
        t.increments('id').unsigned().primary().notNull();
        t.timestamps(true,true);
        t.integer('user_id').references('users.id').notNull().onDelete('cascade');
        t.string('compName').notNull();
        t.string('statusName').notNull();
        t.boolean('completed').notNull();
        t.integer('project_id').references('projects.id').notNull().onDelete('cascade');
    })
    .then(function(){
        return knex('components').insert([
            {user_id:1,compName:"SocialInputs",statusName:"SocialInputs", completed:true, project_id:1},
            {user_id:1,compName:"TestComp2",statusName:"TooltipB", completed:false, project_id:1},
            {user_id:1,compName:"BillInfo",statusName:"BillInfo", completed:true, project_id:1},
            {user_id:1,compName:"WebPages",statusName:"WebPages", completed:false, project_id:1},
            {user_id:1,compName:"LogoUpload",statusName:"LogoUpload", completed:false, project_id:1},
            {user_id:1,compName:"BizInfo",statusName:"BizInfo", completed:false, project_id:1},
            {user_id:1,compName:"Design",statusName:"Design", completed:false, project_id:1},
            {user_id:2,compName:"SocialInputs",statusName:"SocialInputs", completed:true, project_id:2},
            {user_id:2,compName:"TestComp2",statusName:"TooltipB", completed:false, project_id:2},
            {user_id:2,compName:"BillInfo",statusName:"BillInfo", completed:true, project_id:2},
            {user_id:2,compName:"WebPages",statusName:"WebPages", completed:false, project_id:2},
            {user_id:2,compName:"LogoUpload",statusName:"LogoUpload", completed:false, project_id:2},
            {user_id:2,compName:"BizInfo",statusName:"BizInfo", completed:false, project_id:2},
            {user_id:2,compName:"Design",statusName:"Design", completed:false, project_id:2}
        ])
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('components');
};
