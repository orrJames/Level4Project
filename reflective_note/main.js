import { getDatabase, ref, set } from "node_modules/firebase/database";
import {initializeApp} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import {getAnalytics} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";

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
        write_to_db();
        };

    var write_to_db = function () {
        const db = getDatabase();
        set(ref(db, 'test/'), {
            id: "ThisIsATestWrite",
        });
            
     };

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
    function load_ipython_extension() {
        
  // Import the functions you need from the SDKs you need

  // TODO: Add SDKs for Firebase products that you want to use
  //https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
            apiKey: "AIzaSyCdpZmwThiGgPXsEAa9DJe8rZCRP3GqNe0",
            authDomain: "level4project-7da7d.firebaseapp.com",
            projectId: "level4project-7da7d",
            storageBucket: "level4project-7da7d.appspot.com",
            messagingSenderId: "87351024118",
            appId: "1:87351024118:web:0127948fcf317201f3cfd7",
            measurementId: "G-0RXQN7H8P8"
        };

  // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);



        import { initializeApp } from "firebase/app";
        import { getDatabase } from "firebase/database";

        // TODO: Replace the following with your app's Firebase project configuration
        // See: https://firebase.google.com/docs/web/learn-more#config-object
        const firebaseConfig = {
            // ...
            // The value of `databaseURL` depends on the location of the database
            //databaseURL: "https://DATABASE_NAME.firebaseio.com", //level4project-7da7d.europe-west1.firebasedatabase.app
            databaseURL: "https://level4project-7da7d.europe-west1.firebasedatabase.app.firebaseio.com",
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);


        // Initialize Realtime Database and get a reference to the service
        const database = getDatabase(app);







        reflectiveNoteButton();
    }
    return {
        load_ipython_extension: load_ipython_extension
    };
});