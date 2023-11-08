
define([
    'base/js/namespace',
    'base/js/events',
    'require'
], function(Jupyter) {

    var write_to_file = function() { //not working
        const fs = require('fs'); // not recognising fs
        fs.writeFile('Output.txt', "selectedEmotion", (err) => {
            if (err){
                throw err;
            }
            console.log("new created success!");
        });
    }

    //var insert_emotion_cell = function insert_emotion_cell() { 
    var insert_emotion_cell = function() { //not called right now
        Jupyter.notebook.
        insert_cell_below('markdown').
        set_text("Today you are ");
        Jupyter.notebook.select_next();
        Jupyter.notebook.execute_cell();
      };


    function load_ipython_extension() {
        var emotions = ["Happy", "Sad", "Angry", "Excited", "Bored", "Satisfied", "Neutral"];
        var select = $('<select/>');

        emotions.forEach(function(emotion) {
            select.append($('<option/>', {
                value: emotion,
                text: emotion
            }));
        });

        select.on('change', function() {
            var selectedEmotion = select.val();
            //console.log(selectedEmotion);
            Jupyter.notebook.
            insert_cell_below('markdown').
            set_text(("Today you are ".concat(selectedEmotion)));
            Jupyter.notebook.select_next();
            Jupyter.notebook.execute_cell();


            new File(["foo"], "foo.txt", {
                type: "text/plain",
            });

            // write to a file?
            // add a submit button which saves the emotion to a file so we
            //can access later?
            
            // Write data in 'Output.txt' . 
             // this does not work
        });

        var button = $('<button/>', {
            text: 'Select Emotion',
            click: function() {
                select.toggle();
                
            }
        });

        button.appendTo(Jupyter.toolbar.element);
        select.appendTo(Jupyter.toolbar.element);
        select.hide();
    }

    return {
        load_ipython_extension: load_ipython_extension
    };
});


