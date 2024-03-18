var executeReflectiveTool = function() {
    Jupyter.notebook.
    insert_cell_below('code').
    set_text("%load_ext autoreload\n%autoreload 2\n%run reflective_tool");
    Jupyter.notebook.select_next();
    Jupyter.notebook.execute_cell();
    // Hide the current cell
    Jupyter.notebook.get_selected_cell().element.hide();
    getUserInput()
  };

  var getUserInput= function() {
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
              'icon': 'fa-bolt',
              'handler': executeReflectiveTool
          },)
      ])
  }
databaseButton();