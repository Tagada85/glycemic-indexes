import React from 'react'
import ReactDOM from 'react-dom'
import App from '/imports/App.js'

Meteor.startup(() => {
	ReactDOM.render(<App />, document.getElementById('render-target'));
})
