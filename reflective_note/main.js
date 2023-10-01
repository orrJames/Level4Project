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
      var planetJupyterButton = function () {
          console.log();
          Jupyter.toolbar.add_buttons_group([
              Jupyter.keyboard_manager.actions.register ({
                  'help': 'Add note for self reflection xd',
                  'icon' : 'fa-paper-plane',
                  'handler': insert_info_cell
              }, 'addplanetjupyter-cell', 'Reflective Note')
          ])
      }
    // Run on start
    function load_ipython_extension() {
        // Add a default cell if there are no cells
        if (Jupyter.notebook.get_cells().length===1){
            insert_info_cell();
        }
        planetJupyterButton();
    }
    return {
        load_ipython_extension: load_ipython_extension
    };
});