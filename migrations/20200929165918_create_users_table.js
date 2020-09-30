
exports.up = function(knex) {
  return knex.schema
  .createTable('projects', tbl => {
      tbl.increments('id');
      tbl.string('name', 128).notNullable(),
      tbl.string('description', 128)
      tbl.boolean('completed').notNullable().defaultTo(false);
      tbl.integer('resources'),
      tbl.integer('tasks')

  })
.createTable('resources', tbl => {
    tbl.increments(),
    tbl.integer('resources_id')
    .unsigned()
    .notNullable()
    .references('resources')
    .inTable('projects'),
    tbl.string('name', 128).notNullable()
 


})



.createTable('tasks', tbl => {
    tbl.increments(),
    tbl.string('description', 128),
    tbl.string('notes', 128),
   tbl.boolean('completed').notNullable().defaultTo(false);
   tbl.integer('tasks_id')
   .unsigned()
   .notNullable()
   references('tasks')
   .inTable('projects')
    

})
};

exports.down = function(knex) {
    return knex.schema
    dropTableIfExists('tasks')
    dropTableIfExists('resources')
    dropTableIfExists('projects')
  
};
