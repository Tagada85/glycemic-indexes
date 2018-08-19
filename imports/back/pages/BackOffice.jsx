import React from 'react'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import Button from '@material-ui/core/Button'

export default class BackOffice extends React.Component {
	state = {
		file: ''
	}
	handleDrop = e => {
		console.log('DROP')
		console.log(document.getElementById('file').files[0])
		const file = document.getElementById('file').files[0]
		this.setState({file})
	}
	import = () => {
		const reader = new FileReader()
		reader.onload = (data) => {
			Meteor.call('back.import', reader.result, err => {
				console.log('imported')
				console.log(err)
			})
		}
		reader.readAsText(this.state.file)
	}
	render(){
		return (
			<div>
				<InputLabel htmlFor='file'>
					Import CSV File:
				</InputLabel>
				<Input 
					type='file'
					id='file'
					onChange={this.handleDrop} />
				<Button 
					onClick={this.import}
					color='primary'>Import</Button>
			</div>
		)
	}
}