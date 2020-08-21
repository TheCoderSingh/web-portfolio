import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Box from '@material-ui/core/Box'
import { Grid, Typography, Button } from '@material-ui/core'
import samp from './assets/samp.png'
import varletconst from './assets/varletconst.jpeg'
import arrow from './assets/arrow.png'
import women from './assets/women.jpeg'

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`article-${index}`}
			aria-labelledby={`article-${index}`}
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
		id: `article-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	tabs: {
		backgroundColor: "#333"
	},
	title: {
		marginTop: 20,
		fontFamily: "Lato, sans-serif",
		color: "#2fa52f"
	},
	date: {
		marginBottom: 20,
		fontFamily: "Lato, sans-serif"
	},
	description: {
		textAlign: "justify",
		fontFamily: "Lato, sans-serif"
	}
}))

const PublicationTabs = () => {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	}

	let openArticle = (article) => {
		switch (article) {
			case "pawn":
				window.open('https://medium.com/netscrew-technologies/the-world-of-pawn-a80cd2731606?source=friends_link&sk=85953cd9ccb3e2f486cea9f2d2533491', '_blank')
				break
			case "varletconst":
				window.open('https://medium.com/netscrew-technologies/var-let-const-an-overview-and-comparison-3f1220b21774?source=friends_link&sk=64f7d0618a44af8b7fe0ba993369c6ea', '_blank')
				break
			case "women":
				window.open('https://medium.com/netscrew-technologies/3-women-who-made-the-tech-community-proud-f9963ce92e77?source=friends_link&sk=7092cd9a9129b7f241e366a79cc35721', '_blank')
				break
			case "arrow":
				window.open('https://medium.com/netscrew-technologies/elucidating-arrow-functions-in-javascript-236d91bcbf5d?source=friends_link&sk=17de9bb2bc71639c34e5926e571a0598', '_blank')
				break
			default:
				break
		}
	}

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Tabs value={value} onChange={handleChange} aria-label="Project Tabs" className={classes.tabs}>
					<Tab label="All" {...a11yProps(0)} />
					<Tab label="JavScript" {...a11yProps(1)} />
					<Tab label="Pawn" {...a11yProps(2)} />
					<Tab label="Others" {...a11yProps(3)} />
				</Tabs>
			</AppBar>
			<TabPanel value={value} index={0}>
				<div className="publications">
					<Grid container>
						<Grid item xs={12} md={6}>
							<div className="publication">
								<img src={samp} alt="SA:MP" />
								<Typography variant="h5" component="h2" className={classes.title}>
									The World of Pawn
								</Typography>
								<Typography variant="body2" className={classes.date}>
									January 07, 2019
								</Typography>
								<Typography variant="body1" className={classes.description}>
									Most of you probably have played or at least heard about the game ‘Grand Theft Auto: San Andreas’. Yes, I am talking about such an old game in 2019. We all have smashed many people and destroyed many things while driving an ambulance...
								</Typography>
								<Button size="small" onClick={(() => { openArticle("pawn") })}>Read Full Article</Button>
							</div>
						</Grid>
						<Grid item xs={12} md={6}>
							<div className="publication">
								<img src={varletconst} alt="var, let & const" />
								<Typography variant="h5" component="h2" className={classes.title}>
									var, let & const — An Overview and Comparison
								</Typography>
								<Typography variant="body2" className={classes.date}>
									March 02, 2019
								</Typography>
								<Typography variant="body1" className={classes.description}>
									ECMAScript 6 (also known as ES6 or ECMAScript 2015) was finalized in June 2015 and it came out with a whole bunch of new features like...
								</Typography>
								<Button size="small" onClick={(() => { openArticle("varletconst") })}>Read Full Article</Button>
							</div>
						</Grid>
						<Grid item xs={12} md={6}>
							<div className="publication">
								<img src={arrow} alt="Arrow Functions" />
								<Typography variant="h5" component="h2" className={classes.title}>
									Elucidating Arrow Functions in JavaScript
								</Typography>
								<Typography variant="body2" className={classes.date}>
									March 04, 2019
								</Typography>
								<Typography variant="body1" className={classes.description}>
									Arrow Functions were introduced in ECMAScript 6 (ES2015). They are often referred to as “Fat Arrow Functions” or “Lambda Functions”. Arrow Functions are syntactically different from the traditional ES5 functions. An ES5 function has the following syntax...
								</Typography>
								<Button size="small" onClick={(() => { openArticle("arrow") })}>Read Full Article</Button>
							</div>
						</Grid>
						<Grid item xs={12} md={6}>
							<div className="publication">
								<img src={women} alt="Arrow Functions" />
								<Typography variant="h5" component="h2" className={classes.title}>
									3 Women Who Made The Tech Community Proud
								</Typography>
								<Typography variant="body2" className={classes.date}>
									March 08, 2019
								</Typography>
								<Typography variant="body1" className={classes.description}>
									Technology has seeped into every facet of our life. We live in a womb of technology from day to night. The very evident question that often comes to our minds is — Who invented some...
								</Typography>
								<Button size="small" onClick={(() => { openArticle("women") })}>Read Full Article</Button>
							</div>
						</Grid>
					</Grid>
				</div>
			</TabPanel>
			<TabPanel value={value} index={1}>
				<div className="publications">
					<Grid container>
						<Grid item xs={12} md={6}>
							<div className="publication">
								<img src={varletconst} alt="SA:MP" />
								<Typography variant="h5" component="h2" className={classes.title}>
									var, let & const — An Overview and Comparison
								</Typography>
								<Typography variant="body2" className={classes.date}>
									January 07, 2019
								</Typography>
								<Typography variant="body1" className={classes.description}>
									Most of you probably have played or at least heard about the game ‘Grand Theft Auto: San Andreas’. Yes, I am talking about such an old game in 2019. We all have smashed many people and destroyed many things while driving an ambulance...
								</Typography>
								<Button size="small" onClick={(() => { openArticle("pawn") })}>Read Full Article</Button>
							</div>
						</Grid>
						<Grid item xs={12} md={6}>
							<div className="publication">
								<img src={arrow} alt="Arrow Functions" />
								<Typography variant="h5" component="h2" className={classes.title}>
									Elucidating Arrow Functions in JavaScript
								</Typography>
								<Typography variant="body2" className={classes.date}>
									March 04, 2019
								</Typography>
								<Typography variant="body1" className={classes.description}>
									Arrow Functions were introduced in ECMAScript 6 (ES2015). They are often referred to as “Fat Arrow Functions” or “Lambda Functions”. Arrow Functions are syntactically different from the traditional ES5 functions. An ES5 function has the following syntax...
								</Typography>
								<Button size="small" onClick={(() => { openArticle("arrow") })}>Read Full Article</Button>
							</div>
						</Grid>
					</Grid>
				</div>
			</TabPanel>
			<TabPanel value={value} index={2}>
				<div className="publications">
					<Grid container>
						<Grid item xs={12} md={6}>
							<div className="publication">
								<img src={samp} alt="SA:MP" />
								<Typography variant="h5" component="h2" className={classes.title}>
									The World of Pawn
								</Typography>
								<Typography variant="body2" className={classes.date}>
									January 07, 2019
								</Typography>
								<Typography variant="body1" className={classes.description}>
									Most of you probably have played or at least heard about the game ‘Grand Theft Auto: San Andreas’. Yes, I am talking about such an old game in 2019. We all have smashed many people and destroyed many things while driving an ambulance...
								</Typography>
								<Button size="small" onClick={(() => { openArticle("pawn") })}>Read Full Article</Button>
							</div>
						</Grid>
					</Grid>
				</div>
			</TabPanel>
			<TabPanel value={value} index={3}>
				<div className="publications">
					<Grid container>
						<Grid item xs={12} md={6}>
							<div className="publication">
								<img src={women} alt="Arrow Functions" />
								<Typography variant="h5" component="h2" className={classes.title}>
									3 Women Who Made The Tech Community Proud
								</Typography>
								<Typography variant="body2" className={classes.date}>
									March 08, 2019
								</Typography>
								<Typography variant="body1" className={classes.description}>
									Technology has seeped into every facet of our life. We live in a womb of technology from day to night. The very evident question that often comes to our minds is — Who invented some...
								</Typography>
								<Button size="small" onClick={(() => { openArticle("women") })}>Read Full Article</Button>
							</div>
						</Grid>
					</Grid>
				</div>
			</TabPanel>
		</div>
	)
}

export default PublicationTabs
