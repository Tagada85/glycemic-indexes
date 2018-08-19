import React from 'react'
import Typography from '@material-ui/core/Typography'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Grid from '@material-ui/core/Grid'
import Autocomplete from '../components/Autocomplete'
import {withStyles} from '@material-ui/core/styles'

const styles = theme => ({
	root: {
		flexGrow: 1,
		marginTop: '20px',
		alignItems: 'center'
	},
	filters: {
		flexGrow: 1,
		justifyContent: 'center'
	},
	margins: {
		margin: '20px'
	},
	disabled: {
		color:theme.palette.secondary.contrastText,
		cursor: 'not-allowed'
	}
})

class IndexesLists extends React.Component {
	state = {
		category: ''
	}
	render(){
		const {category} = this.state
		const {classes} = this.props
		return (
			<React.Fragment>
			<Grid 
				container 
				direction='column'
				spacing={16}
				className={classes.root}>
				<Typography 
					variant='title'
					color='primary'
					gutterBottom={true}>
					Glycemic Indexes List
				</Typography>
			</Grid>
			<Grid 
				container
				spacing={16}
				className={classes.filters}
				direction='row'>
				<Grid item>
				<Typography
					variant='subheading'
					color='secondary'>
					You can filter by categories:
				</Typography>
				<Select
					value={category}
					onChange={e => this.setState({category: e.target.value})}
					displayEmpty={true}>
					<MenuItem value="" className={classes.disabled}>Pick a Category</MenuItem>
					<MenuItem value='Fruits'>Fruits</MenuItem>
					<MenuItem value='Legums'>Legums</MenuItem>
				</Select>
				</Grid>
				<Grid item>
					<Typography
						variant='title'
						color='primary'>OR</Typography>
				</Grid>
				<Grid item>
				<Typography
					variant='subheading'
					color='secondary'>
					Search for an single entry:
				</Typography>
				<Autocomplete />
				</Grid>
			</Grid>
			</React.Fragment>
		)
	}
}

export default withStyles(styles)(IndexesLists)