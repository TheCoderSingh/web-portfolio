import React from 'react'
import { Grid } from '@material-ui/core'
import NavDrawer from '../common/NavDrawer'
import SectionHeader from '../common/SectionHeader'
import PublicationTabs from '../PublicationTabs'

const Publications = () => {
	return (
		<section id="publications">
			<Grid container>
				<Grid item xs={12}>
					<NavDrawer />
				</Grid>
				<Grid item xs={12}>
					<SectionHeader sectionTitle="Publications" sectionDescription="I eat computers for breakfast!" />
				</Grid>
				<Grid container direction="column">
					<div id="publication-cards">
						<Grid item xs={12}>
							{/* <PublicationCard /> */}
							<PublicationTabs />
						</Grid>
					</div>
				</Grid>
			</Grid>
		</section>
	)
}

export default Publications
