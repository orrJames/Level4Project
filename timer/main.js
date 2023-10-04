define([
    'jquery',
    'base/js/namespace',
    'base/js/events'
], function ($, Jupyter, events) {
    "use strict";

    var Stopwatch = function () {
        this.timerInterval = null;
        this.startTime = null;
        this.isRunning = false;
        this.container = null;
    };

    Stopwatch.prototype.start = function () {
        if (!this.isRunning) {
            if (!this.startTime){
                this.startTime = new Date().getTime();}

            this.timerInterval = setInterval(this.update.bind(this), 1000);
            this.isRunning = true;
        }
    };

    // Stopwatch.prototype.stop = function () {
    //     if (this.isRunning) {
    //         clearInterval(this.timerInterval);
    //         this.isRunning = false;
    //     }
    // };

    Stopwatch.prototype.reset = function () {
        this.startTime = null;
        this.isRunning = false;
        this.update();
    };

    Stopwatch.prototype.update = function () {
        var currentTime = new Date().getTime();
        var elapsedTime = this.startTime ? (currentTime - this.startTime) / 1000 : 0;
        var formattedTime = this.formatTime(elapsedTime);
        this.container.text(formattedTime);
    };

    Stopwatch.prototype.formatTime = function (seconds) {
        var minutes = Math.floor(seconds / 60);
        seconds %= 60;
        seconds = Math.floor(seconds)
        var hours = Math.floor(minutes / 60);
        minutes %= 60;

        return (
            (hours < 10 ? "0" : "") + hours + ":" +
            (minutes < 10 ? "0" : "") + minutes + ":" +
            (seconds < 10 ? "0" : "") + seconds
        );
    };

    function load_ipython_extension() {
        var stopwatch = new Stopwatch();
        var $toolbar = Jupyter.toolbar.element;
        var $button = $("<button/>")
            .addClass("btn btn-default")
            .text("Start")
            .click(function () {
                $button.text("Start");
                stopwatch.start();
            });
        var $resetButton = $("<button/>")
            .addClass("btn btn-default")
            .text("Reset")
            .click(function () {
                stopwatch.reset();
                $button.text("Start");
            });

        stopwatch.container = $("<div/>")
            .addClass("stopwatch")
            .text("00:00:00");

        $toolbar.append(stopwatch.container, $button, $resetButton);
    }

    return {
        load_ipython_extension: load_ipython_extension
    };
});