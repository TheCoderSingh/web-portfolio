import React from 'react'
import { Grid } from '@material-ui/core'
import NavIcon from '../common/NavIcon'
import NavDrawer from '../common/NavDrawer'
import SectionHeader from '../common/SectionHeader'

const Skills = () => {
	return (
		<section id="skills" data-aos="fade-up" data-aos-anchor-placement="bottom-center">
			<Grid container id="skills-header" >
				<Grid item xs={10}>
					<SectionHeader sectionTitle="Skills" sectionDescription="Awesome! Right?" />
				</Grid>
				<Grid item xs={2}>
					<NavIcon open={false} />
					<NavDrawer />
				</Grid>
			</Grid>
		</section >
	)
}

export default Skills
