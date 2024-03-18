var init_fb = function() {
    Jupyter.notebook.
    insert_cell_below('code').
    set_text("%load_ext autoreload\n%autoreload 2\n%run reflective_tool"); //points to .py file location
    //change this so can be deployable!!!!
    Jupyter.notebook.select_next();
    Jupyter.notebook.execute_cell();



    // Hide the current cell
    Jupyter.notebook.get_selected_cell().element.hide();

    // //db.collection("users").doc("user1").set(data);
    toFB_cell()
  };


  var toFB_cell= function() {
    Jupyter.notebook.
    insert_cell_below('code').
    set_text("%%read_notes\n#Enter a lab id");
    Jupyter.notebook.select_next();
    Jupyter.notebook.execute_cell();
    //Jupyter.notebook.get_selected_cell().element.hide();
    };





  // Add Toolbar button
  var summaryButton = function () {
      Jupyter.toolbar.add_buttons_group([
          Jupyter.keyboard_manager.actions.register ({
              'help': 'Generate a summary report',
              'icon' : 'fa-question-circle',
              'handler': init_fb
          }, 'addplanetjupyter-cell', 'Read from fb db')
      ])
  }
// Run on start
//function load_ipython_extension() {
    summaryButton();