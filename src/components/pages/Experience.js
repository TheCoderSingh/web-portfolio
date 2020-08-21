import React from 'react'
import { Grid, Divider } from '@material-ui/core'
import NavDrawer from '../common/NavDrawer'
import SectionHeader from '../common/SectionHeader'
import ExperienceCard from '../ExperienceCard'

const Experience = () => {
	return (
		<section id="experience">
			<Grid container>
				<Grid item xs={12}>
					<NavDrawer />
				</Grid>
				<Grid item xs={12}>
					<SectionHeader sectionTitle="Experience" sectionDescription='"Wisdom is the reward of experience and should be shared"' />
				</Grid>
			</Grid>
			<div id="exp-cards">
				<Grid container spacing={2}>
					<Grid item xs={12} md={6}>
						<ExperienceCard title="Freelancer" place="Netscrew Technologies" date="November 2018 - March 2019" description="Working on my startup and actively looking for new projects. Various technologies such as HTML5, CSS3, Angular, Firebase etc. are being used to develop quality products for clients." />
					</Grid>
					<Divider />
					<Grid item xs={12} md={6}>
						<ExperienceCard title="Software Engineer (Development In-Charge)" place="Geekers Technologies" date="July 2018 - October 2018" description="Worked on various technologies including Angular, React Native, Django, Laravel etc." />
					</Grid>
					<Divider />
					<Grid item xs={12} md={6}>
						<ExperienceCard title="Bootcamp Intern" place="Statusbrew" date="June 2018" description="Worked on the PHP framework Symfony, Docker, Redis and many other technologies." />
					</Grid>
					<Divider />
					<Grid item xs={12} md={6}>
						<ExperienceCard title="Bootcamp Intern" place="Statusbrew" date="June 2017" description="Worked on Angular 4 and created 'Phonebook' and 'Todo' applications." />
					</Grid>
					<Divider />
					<Grid item xs={12} md={12}>
						<ExperienceCard title="Digital Marketing Intern" place="Notice App" date="November 2016" description="Main responsibilities included marketing and promotion of the app." />
					</Grid>
				</Grid>
			</div>
		</section>
	)
}

export default Experience
