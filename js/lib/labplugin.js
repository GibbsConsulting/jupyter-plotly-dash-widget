var jupyter-plotly-dash-widget = require('./index');
var base = require('@jupyter-widgets/base');

module.exports = {
  id: 'jupyter-plotly-dash-widget',
  requires: [base.IJupyterWidgetRegistry],
  activate: function(app, widgets) {
      widgets.registerWidget({
          name: 'jupyter-plotly-dash-widget',
          version: jupyter-plotly-dash-widget.version,
          exports: jupyter-plotly-dash-widget
      });
  },
  autoStart: true
};

