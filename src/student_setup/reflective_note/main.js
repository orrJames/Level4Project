var insertDescriptionCell = function() {
    Jupyter.notebook.
    insert_cell_below('markdown').
    set_text("Make a note on the previous task! Think about what you found difficult and what went well. Reflect on something");
    Jupyter.notebook.select_next();
    Jupyter.notebook.execute_cell();
    insertInputCell()
  };

  var insertInputCell= function() {
    Jupyter.notebook.
    insert_cell_below('markdown').
    set_text("Type your reflective note here!");
    Jupyter.notebook.select_next();

    };

  var reflectiveNoteButton = function () {
      Jupyter.toolbar.add_buttons_group([
          Jupyter.keyboard_manager.actions.register ({
              'help': 'Add note for self reflection',
              'icon': 'fa-check',
              'handler': insertDescriptionCell
          },)
      ])
  }

reflectiveNoteButton();
