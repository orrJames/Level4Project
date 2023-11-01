
define([
    'base/js/namespace',
    'base/js/events',
    'require'
], function(Jupyter, events, requirejs) {
    var selectedEmotion = "Happy";
    var write_to_file = function() {
        const fs = require('fs');
        fs.writeFile('Output.txt', selectedEmotion, (err) => {
            if (err){
                throw err;
            }
            console.log("new created success!");
        });
    }


    function load_ipython_extension() {
        var emotions = ["Happy", "Sad", "Angry", "Excited", "Bored"];
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
            write_to_file();

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


