'use strict';

describe('Main', function () {
  var React = require('react/addons');
  var IzeeeWebApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    IzeeeWebApp = require('components/IzeeeWebApp.js');
    component = React.createElement(IzeeeWebApp);
  });

  it('should create a new instance of IzeeeWebApp', function () {
    expect(component).toBeDefined();
  });
});
