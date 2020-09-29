
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
        tbl.increments();
        tbl.string('name', 128).notNullable(),
        tbl.string('description', 128)
        tbl.boolean('completed').notNullable().defaultTo(false);
        tbl.integer('resources'),
        tbl.integer('tasks')
  
    })
  .createTable('resources', tbl => {
      tbl.increments(),
      tbl.string('name', 128).notNullable(),
      tbl.integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
     
   
  
  
  })
  .createTable('tasks', tbl => {
      tbl.increments(),
      tbl.string('description', 128),
      tbl.string('notes', 128),
     tbl.boolean('completed').notNullable().defaultTo(false);
     tbl.integer('project_id')
     .unsigned()
     .notNullable()
     .references('id')
     .inTable('projects'),
     tbl.integer('project_id')
     .unsigned()
     .notNullable()
     .references('id')
     .inTable('resources')

      
  
  })
  
  };
  
  exports.down = function(knex) {
      return knex.schema
      dropTableIfExists('tasks')
      dropTableIfExists('resources')
      dropTableIfExists('projects')
    
  };
  