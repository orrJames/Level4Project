# custom_extension.py

from notebook import nbextensions
from notebook.utils import url_path_join
from pathlib import Path
import firebase_admin

# Define the path to the JavaScript file
script_path = Path(__file__).parent / 'custom_script.js'

def load_jupyter_server_extension(nbapp):
    """
    Function called when the extension is loaded.
    """
    nbapp.log.info('Custom extension is loaded.')

    # Register the JavaScript file with the notebook
    nbapp.web_app.settings['load_other_extensions'] = True
    nbapp.web_app.settings['nbextensions_app'] = nbextensions.server_nbextension_config_section
    nbapp.web_app.settings['nbextensions_path'] = str(Path(__file__).parent)
    nbapp.web_app.settings['nbextensions_url_prefix'] = nbapp.web_app.settings['base_url'] + 'nbextensions'

    nbapp.web_app.settings['nbextensions'] = {
        'custom_extension/main': True,
    }

    cred_obj = firebase_admin.credentials.Certificate('....path to file')
    default_app = firebase_admin.initialize_app(cred_object, {
	    'databaseURL':databaseURL
	})

def _jupyter_server_extension_paths():
    """
    Function to declare the Jupyter Server Extension Paths.
    """
    return [{
        'module': 'custom_extension',
    }]

def _jupyter_nbextension_paths():
    """
    Function to declare the Jupyter Notebook Extension Paths.
    """
    return [{
        'section': 'notebook',
        'src': 'static',
        'dest': 'custom_extension',
        'require': 'custom_extension/main',
    }]
