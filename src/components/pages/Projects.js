import React from 'react'
import { Grid } from '@material-ui/core'
import NavIcon from '../common/NavIcon'
import NavDrawer from '../common/NavDrawer'
import SectionHeader from '../common/SectionHeader'
import ProjectCard from '../ProjectCard'

const Projects = () => {
	return (
		<section id="projects">
			<Grid container>
				<Grid item xs={10}>
					<SectionHeader sectionTitle="Projects" sectionDescription="I eat computers for breakfast!" />
				</Grid>
				<Grid item xs={2}>
					<NavIcon open={false} />
					<NavDrawer />
				</Grid>
			</Grid>
			<div id="project-cards">
				<ProjectCard />
			</div>
		</section>
	)
}

export default Projects
