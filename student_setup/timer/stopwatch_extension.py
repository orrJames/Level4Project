
from notebook import nbextensions

class StopwatchExtension(nbextensions.BaseNBExtension):
    def __init__(self, *args, **kwargs):
        super(StopwatchExtension, self).__init__(*args, **kwargs)

def load_jupyter_server_extension(nbapp):
    """Load the server extension."""
    nbapp.log.info("Loading Stopwatch extension")
    nbapp.web_app.settings['stopwatch_extension'] = nbapp.config.get(
        'StopwatchExtension', {}
    )
