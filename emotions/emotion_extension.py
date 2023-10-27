from IPython.display import display, Javascript, HTML
from ipywidgets import widgets

def run_selected_code(btn):
    code = get_selected_code()
    display(Javascript(code))

def get_selected_code():
    return """\
    define([
    'base/js/namespace',
    'base/js/promises'
], function(Jupyter, promises) {
    function load_ipython_extension() {
        var runButton = function() {
            var code = `
                var dropdown = document.createElement('select');
                dropdown.innerHTML = "<option value='Happy'>Happy</option>" +
                                     "<option value='Sad'>Sad</option>" +
                                     "<option value='Excited'>Excited</option>" +
                                     "<option value='Anxious'>Anxious</option>" +
                                     "<option value='Content'>Content</option>";

                var button = document.createElement('button');
                button.innerHTML = 'Submit';
                button.onclick = function() {
                    var selectedValue = dropdown.value;
                    if (selectedValue) {
                        var result = "You are feeling: " + selectedValue;
                        var resultElement = document.createElement('div');
                        resultElement.innerHTML = result;
                        element.append(resultElement);
                    } else {
                        var resultElement = document.createElement('div');
                        resultElement.innerHTML = "Please select how you are feeling.";
                        element.append(resultElement);
                    }
                };

                var element = document.createElement('div');
                element.append(dropdown);
                element.append(button);

                var output_area = this.element.find('.output_area')[0];
                output_area.append(element);
            `;
            var cell = Jupyter.notebook.get_selected_cell();
            cell.set_text(code);
            Jupyter.notebook.execute_cell_and_select_below();
        };

        var action = {
            icon: 'fa-smile-o',
            help: 'Run feeling selection code',
            help_index: 'zz',
            handler: runButton
        };
        var prefix = 'custom_extension';
        var action_name = 'run-feeling-selection';
        var full_action_name = Jupyter.actions.register(action, action_name, prefix);
        Jupyter.toolbar.add_buttons_group([full_action_name]);
    }

    return {
        load_ipython_extension: load_ipython_extension
    };
});

    """

def load_ipython_extension(ipython):
    btn = widgets.Button(description="Run Custom Code")
    btn.on_click(run_selected_code)
    display(btn)