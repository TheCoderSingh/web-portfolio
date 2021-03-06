import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import NavDrawer from '../common/NavDrawer'
import SectionHeader from '../common/SectionHeader'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'

const About = () => {
	return (
		<section id="about">
			<Grid container>
				<Grid item xs={12}>
					<NavDrawer />
				</Grid>
				<Grid item xs={12}>
					<SectionHeader sectionTitle="About Me" sectionDescription="Pretty interesting! Eh?" />
				</Grid>
				<Grid item xs={12}>
					<div id="about-content">
						<Typography>
							I am a software engineer and a technology enthusiast, who believes that the world can become a better place using technology. I have a professional experience in Website Development and Mobile App Development.
						</Typography>
					</div>
				</Grid>
			</Grid>
			<div id="connect-content">
				<Grid container>
					<Grid item xs={12}>
						<Typography variant="h5">
							Connect With Me
						</Typography>
					</Grid>
					<Grid container id="social-icons">
						<Grid item xs={2}>
							<a href="https://www.facebook.com/CoderSingh/"><img src={facebook} alt="Facebook" /></a>
						</Grid>
						<Grid item xs={2}>
							<a href="https://www.instagram.com/codersingh/"><img src={instagram} alt="Instagram" /></a>
						</Grid>
						<Grid item xs={2}>
							<a href="https://twitter.com/TheCoderSingh"><img src={twitter} alt="Twitter" /></a>
						</Grid>
						<Grid item xs={2}>
							<a href="https://github.com/TheCoderSingh"><img src={github} alt="GitHub" /></a>
						</Grid>
						<Grid item xs={2}>
							<a href="https://www.linkedin.com/in/thecodersingh/"><img src={linkedin} alt="LinkedIn" /></a>
						</Grid>
					</Grid>
				</Grid>
			</div>
		</section >
	)
}

export default About
