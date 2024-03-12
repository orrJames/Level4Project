var init_fb = function() {
    Jupyter.notebook.
    insert_cell_below('code').
    set_text("%load_ext autoreload\n%autoreload 2\n%run reflective_tool");
    Jupyter.notebook.select_next();
    Jupyter.notebook.execute_cell();
    // Hide the current cell
    Jupyter.notebook.get_selected_cell().element.hide();
    to_firebase_cell()
  };

  var to_firebase_cell= function() {
    Jupyter.notebook.
    insert_cell_below('code').
    set_text("%%to_firebase\n#Describe your experience");
    Jupyter.notebook.select_next();
    Jupyter.notebook.execute_cell();
    };





  // Add Toolbar button
  var databaseButton = function () {
      Jupyter.toolbar.add_buttons_group([
          Jupyter.keyboard_manager.actions.register ({
              'help': 'End of Notebook reflection',
              'icon' : 'fa-bolt',
              'handler': init_fb
          }, 'addplanetjupyter-cell', 'End of Notebook reflection')
      ])
  }
// Run on start
//function load_ipython_extension() {
    databaseButton();