//import { getDatabase, ref, set } from "node_modules/firebase/database";
//import {initializeApp} from "firebase/app";
//import {getAnalytics} from "node_modules/firebase";
//import { write_to_db } from "firebase.js";
    //import {write_to_db} from './firebase.js';

// define([
//     'base/js/namespace',
//     'base/js/events'
//     ],
    //function main (Jupyter) {
      


    // async function dynamicImport() {
    //   const x = await import {write_to_db} from './firebase.js';
    // return write_to_db;
    // }
    // Import the functions you need from the SDKs you need
import { write_to_db } from './firebase';
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
        write_to_db();
        };

      // var write_to_db = function () {
      //     console.log("write to db");
      //     //const db = getDatabase();
      //     set(ref(db, 'test/'), {
      //         id: "ThisIsATestWrite",
      //     });
              
      // };

      var save_note = function(){
        // let data = "reflective note data";
        // const fs = require('fs'); 
        // fs.readFile('file.txt', (err, data) => { 
        //   if(err) { 
        //     throw err; 
        //   } 
        //   console.log(data.toString()); 
        // }); 

        const fs = require('fs');

        // Specify the file path and content
        const filePath = 'example.txt';
        const fileContent = 'This is the content that will be written to the file.';

        // Write to the file
        fs.writeFile(filePath, fileContent, (err) => {
          if (err) {
            console.error('Error writing to file:', err);
          } else {
            console.log('Successfully wrote to file!');
          }
        });
      }



      // Add Toolbar button
      var reflectiveNoteButton = function () {
          Jupyter.toolbar.add_buttons_group([
              Jupyter.keyboard_manager.actions.register ({
                  'help': 'Add note for self reflection xd',
                  'icon' : 'fa-check',
                  'handler': insert_info_cell
              }, 'addplanetjupyter-cell', 'Reflective Note')
          ])

          Jupyter.toolbar.add_buttons_group([
            Jupyter.keyboard_manager.actions.register ({
                'help': 'Save your reflective note',
                'icon' : 'fa-check',
                'handler': save_note
            }, 'addplanetjupyter-cell', 'Save Reflection')
        ])
      }
    // Run on start
    //function load_ipython_extension() {
        reflectiveNoteButton();
    //}
   // return {
     //   load_ipython_extension: load_ipython_extension
    //};
  
//});