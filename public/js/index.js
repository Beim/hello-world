'use strict';

var rce = React.createElement.bind();
var socket = io.connect('/');
React.initializeTouchEvents(true);
var t = function t() {
	return 'hello world';
};

var total = React.createClass({
	displayName: 'total',
	display: 'total',

	render: function render() {
		return rce('div', null, t());
	}
});

React.render(rce(total, null), document.body);