var init_fb = function() {
    Jupyter.notebook.
    insert_cell_below('code').
    set_text("%load_ext autoreload\n%autoreload 2\n%run C:\\Users\\orrja\\uni\\Level4\\Level4Project\\reflective_note\\reflective_note");
    Jupyter.notebook.select_next();
    Jupyter.notebook.execute_cell();



    // Hide the current cell
    Jupyter.notebook.get_selected_cell().element.hide();

    // //db.collection("users").doc("user1").set(data);
    toFB_cell()
  };

//   var get_lab_id = function(){
//     Jupyter.notebook.
//     insert_cell_below('code').
//     set_text("lab = #insert lab id\n%%lab_id\nlab");
//     Jupyter.notebook.select_next();
//     Jupyter.notebook.execute_cell();
//     toFB_cell();
// }

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
              'icon' : '<i class="fas fa-x-ray"></i>',
              'handler': init_fb
          }, 'addplanetjupyter-cell', 'Read from fb db')
      ])
  }
// Run on start
//function load_ipython_extension() {
    summaryButton();