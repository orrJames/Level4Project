var init_fb = function() {
    Jupyter.notebook.
    insert_cell_below('code').
    set_text("%load_ext autoreload\n%autoreload 2\n%run C:\\Users\\orrja\\uni\\Level4\\Level4Project\\reflective_note\\reflective_note");
    Jupyter.notebook.select_next();
    Jupyter.notebook.execute_cell();



    // Hide the current cell
    Jupyter.notebook.get_selected_cell().element.hide();

    // //db.collection("users").doc("user1").set(data);
    to_firebase_cell()
  };

//   var get_lab_id = function(){
//     Jupyter.notebook.
//     insert_cell_below('code').
//     set_text("lab = #insert lab id\n%%lab_id\nlab");
//     Jupyter.notebook.select_next();
//     Jupyter.notebook.execute_cell();
//     toFB_cell();
// }

  var to_firebase_cell= function() {
    Jupyter.notebook.
    insert_cell_below('code').
    set_text("%%to_firebase\n#Describe your experience");
    Jupyter.notebook.select_next();
    Jupyter.notebook.execute_cell();
    // not working - want to display gibbs reflective cycle diagram - help users understand the work flow
        // var imgElement = $('<img>')
        //     .attr("src", "gibbs_cycle.png")
        // Jupyter.notebook.get_cell(0).element.append(imgElement);
    //Jupyter.notebook.get_selected_cell().element.hide();
    };





  // Add Toolbar button
  var databaseButton = function () {
      Jupyter.toolbar.add_buttons_group([
          Jupyter.keyboard_manager.actions.register ({
              'help': 'Write to database',
              'icon' : 'fa-bolt',
              'handler': init_fb
          }, 'addplanetjupyter-cell', 'Write to fb db')
      ])
  }
// Run on start
//function load_ipython_extension() {
    databaseButton();