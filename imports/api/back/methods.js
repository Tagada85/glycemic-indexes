import {check} from 'meteor/check'
Meteor.methods({
	'back.import'(data){
		check(data, String)

		console.log(data)
		return 
	}
})