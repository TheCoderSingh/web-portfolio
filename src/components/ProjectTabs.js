import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Box from '@material-ui/core/Box'
import { Grid } from '@material-ui/core'
import aura from './assets/projects/aura.png'
import zoom from './assets/projects/zoom.png'
import aquashot from './assets/projects/aquashot.png'

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`project-${index}`}
			aria-labelledby={`project-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={1}>
					{children}
				</Box>
			)}
		</div>
	)
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `project-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
	},
	tabs: {
		backgroundColor: "#2fa52f"
	}
}));

const ProjectTabs = () => {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Tabs value={value} onChange={handleChange} aria-label="Project Tabs" className={classes.tabs}>
					<Tab label="All" {...a11yProps(0)} />
					<Tab label="React" {...a11yProps(1)} />
					<Tab label="Angular" {...a11yProps(2)} />
					<Tab label="JavaScript" {...a11yProps(3)} />
				</Tabs>
			</AppBar>
			<TabPanel value={value} index={0}>
				<div className="projects">
					<Grid container>
						<Grid item xs={12}>
							<img src={aura} alt="Aura" />
						</Grid>
						<Grid item xs={12}>
							<img src={zoom} alt="Zoom" />
						</Grid>
						<Grid item xs={12}>
							<img src={aquashot} alt="Aquashot" />
						</Grid>
					</Grid>
				</div>
			</TabPanel>
			<TabPanel value={value} index={1}>
				<Grid item xs={12}>
					<img src={aura} alt="Aura" />
				</Grid>
			</TabPanel>
			<TabPanel value={value} index={2}>
				Item Three
      		</TabPanel>
			<TabPanel value={value} index={3}>
				<Grid item xs={12}>
					<img src={zoom} alt="Zoom" />
				</Grid>
				<Grid item xs={12}>
					<img src={aquashot} alt="Aquashot" />
				</Grid>
			</TabPanel>
		</div>
	)
}

export default ProjectTabs
