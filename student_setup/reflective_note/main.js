var init_fb = function() {
    Jupyter.notebook.
    insert_cell_below('markdown').
    set_text("Make a note on the previous task! Think about what you found difficult and what went well. Reflect on something");
    Jupyter.notebook.select_next();
    Jupyter.notebook.execute_cell();



    // Hide the current cell
    //Jupyter.notebook.get_selected_cell().element.hide();

    // //db.collection("users").doc("user1").set(data);
    to_firebase_cell1()
  };

//   var get_lab_id = function(){
//     Jupyter.notebook.
//     insert_cell_below('code').
//     set_text("lab = #insert lab id\n%%lab_id\nlab");
//     Jupyter.notebook.select_next();
//     Jupyter.notebook.execute_cell();
//     toFB_cell();
// }

  var to_firebase_cell1= function() {
    Jupyter.notebook.
    insert_cell_below('markdown').
    set_text("Type your reflective note here!");
    Jupyter.notebook.select_next();
    // not working - want to display gibbs reflective cycle diagram - help users understand the work flow
        // var imgElement = $('<img>')
        //     .attr("src", "gibbs_cycle.png")
        // Jupyter.notebook.get_cell(0).element.append(imgElement);
    //Jupyter.notebook.get_selected_cell().element.hide();
    };





  // Add Toolbar button
  var reflectiveNoteButton = function () {
      Jupyter.toolbar.add_buttons_group([
          Jupyter.keyboard_manager.actions.register ({
              'help': 'Add note for self reflection',
              'icon' : 'fa-check',
              'handler': init_fb
          }, 'addplanetjupyter-cell', 'Reflective Note')
      ])
  }
// Run on start
//function load_ipython_extension() {
  reflectiveNoteButton();