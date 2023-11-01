define([
    'base/js/namespace',
    './stopwatch',
], function (Jupyter, stopwatch) {
    var load_extension = function () {
        stopwatch.load_ipython_extension();
    };

    return {
        load_ipython_extension: load_extension,
    };
});
