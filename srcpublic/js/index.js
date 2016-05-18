'use strict'
var rce = React.createElement.bind()
var socket = io.connect('/')
React.initializeTouchEvents(true)
let t = () => {
	return 'hello world'
}

var total = React.createClass({display:'total',

	render : function(){
		return (
			rce('div',null, t())
		)
	}
})

React.render(rce(total,null), document.body)

