import React from 'react'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'
import {withStyles} from '@material-ui/core/styles'

const styles = theme => ({
	link: {
		textDecoration: 'none',
		color: theme.palette.secondary.main
	}
})

const Router = props => {
	const {classes} = props
	return (
		<div>
			<Button
				size="large" 
				color='primary'>
				<Link 
					className={classes.link}
					to="/">
					Home
				</Link>
			</Button>
			<Button size="large" color='primary'>
				<Link 
					to="/indexes"
					className={classes.link}>
					Indexes
				</Link>
			</Button>
			<Button size="large" color='primary'>
				<Link 
					className={classes.link}
					to="/about">
					About
				</Link>
			</Button>
		</div>
	)
} 

export default withStyles(styles)(Router)