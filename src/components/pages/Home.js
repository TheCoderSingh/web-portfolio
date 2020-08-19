import React from 'react'
import { Grid, Button, Typography } from '@material-ui/core'
import ScrollIcon from '../ScrollIcon'
import NavDrawer from '../common/NavDrawer'
import About from './About'

const Home = () => {
	return (
		<React.Fragment>
			<section id="home">
				<Grid container>
					<Grid item xs={12}>
						<NavDrawer />
					</Grid>
					<Grid item xs={12}>
						<div className="section-header">
							<Typography className="header-title" align="center">
								Jaskaran Singh
							</Typography>
							<Typography variant="body1" className="header-description" align="center">
								Full-Stack Developer
							</Typography>
						</div>
						<Grid item xs={12} id="btn-container">
							<Button variant="outlined" size="large" id="resume-btn">
								View My Resume
        					</Button>
						</Grid>
					</Grid>
					<Grid item xs={12}>
						<Typography id="scroll-text">
							Scroll down to see how awesome I am...
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<ScrollIcon />
					</Grid>
				</Grid >
			</section>
			<About />
		</React.Fragment>
	)
}

export default Home
