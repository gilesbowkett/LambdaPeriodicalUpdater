// this is a copy of PeriodicalUpdater which only changes one thing - it takes a function for its URL arg,
// rather than a literal value, and so can call different URLs at different times.

// http://gilesbowkett.blogspot.com/2009/05/lambdaperiodicalupdater.html

Ajax.LambdaPeriodicalUpdater = Class.create(Ajax.PeriodicalUpdater, {
  initialize: function($super, container, url_function, options) {
    $super(container, url_function, options);
  },

  onTimerEvent: function() {
    this.updater = new Ajax.Appender(this.container, this.url(), this.options);
  }
});

