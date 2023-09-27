define([
    'base/js/namespace',
    'base/js/events'
    ], function(Jupyter, events) {

      var insert_cell = function() {
        Jupyter.notebook.
        insert_cell_below('code').
        set_text(`# Make a note on the previous task!`);
        Jupyter.notebook.select_prev();
        //Jupyter.notebook.execute_cell_and_select_below();
      };
      // Add Toolbar button
      var planetJupyterButton = function () {
          console.log();
          Jupyter.toolbar.add_buttons_group([
              Jupyter.keyboard_manager.actions.register ({
                  'help': 'Add note for self reflection',
                  'icon' : 'fa-paper-plane',
                  'handler': insert_cell
              }, 'addplanetjupyter-cell', 'Reflective Note')
          ])
      }
    // Run on start
    function load_ipython_extension() {
        // Add a default cell if there are no cells
        if (Jupyter.notebook.get_cells().length===1){
            insert_cell();
        }
        planetJupyterButton();
    }
    return {
        load_ipython_extension: load_ipython_extension
    };
});