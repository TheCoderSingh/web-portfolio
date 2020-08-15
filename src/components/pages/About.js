import React from 'react'
import { Grid } from '@material-ui/core'
import NavIcon from '../common/NavIcon'
import NavDrawer from '../common/NavDrawer'
import SectionHeader from '../common/SectionHeader'

const About = (props) => {
	return (
		<section id="about" data-aos="fade-up" data-aos-anchor-placement="bottom-center" ref={props.refProp}>
			<Grid container>
				<Grid item xs={10}>
					<SectionHeader sectionTitle="About Me" sectionDescription="Pretty interesting! Eh?" />
				</Grid>
				<Grid item xs={2}>
					<NavIcon open={false} />
					<NavDrawer />
				</Grid>
			</Grid >
		</section>
	)
}

export default About
