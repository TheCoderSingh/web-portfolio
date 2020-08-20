import React from 'react'
import { Grid } from '@material-ui/core'
import NavDrawer from '../common/NavDrawer'
import SectionHeader from '../common/SectionHeader'
import ProjectTabs from '../ProjectTabs'

const Projects = () => {
	return (
		<section id="projects">
			<Grid container>
				<Grid item xs={12}>
					<NavDrawer />
				</Grid>
				<Grid item xs={12}>
					<SectionHeader sectionTitle="Projects" sectionDescription="I eat computers for breakfast!" />
				</Grid>
			</Grid>
			<Grid container direction="column">
				<div id="project-cards">
					<Grid item xs={12}>
						<ProjectTabs />
					</Grid>
				</div>
			</Grid>
		</section>
	)
}

export default Projects
