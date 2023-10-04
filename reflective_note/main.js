define([
    'base/js/namespace',
    'base/js/events'
    ], function(Jupyter, events) {

      var insert_info_cell = function() {
        Jupyter.notebook.
        insert_cell_below('markdown').
        set_text("Make a note on the previous task! Think about what you found difficult and what went well. Reflect on something");
        Jupyter.notebook.select_next();
        Jupyter.notebook.execute_cell();
        insert_response_cell();
      };

      var insert_response_cell = function() {
        Jupyter.notebook.
        insert_cell_below('markdown').
        set_text("Type you reflective note here!");
        Jupyter.notebook.select_next();
      };
      // Add Toolbar button
      var reflectiveNoteButton = function () {
          console.log();
          Jupyter.toolbar.add_buttons_group([
              Jupyter.keyboard_manager.actions.register ({
                  'help': 'Add note for self reflection xd',
                  'icon' : 'fa-check',
                  'handler': insert_info_cell
              }, 'addplanetjupyter-cell', 'Reflective Note')
          ])
      }
    // Run on start
    function load_ipython_extension() {
        reflectiveNoteButton();
    }
    return {
        load_ipython_extension: load_ipython_extension
    };
});