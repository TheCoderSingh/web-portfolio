import React from 'react'
import { Grid } from '@material-ui/core'
import NavIcon from '../common/NavIcon'
import NavDrawer from '../common/NavDrawer'
import SectionHeader from '../common/SectionHeader'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/javascript.png'
import angular from '../assets/angular.png'
import vue from '../assets/vue.png'
import laravel from '../assets/laravel.png'
import sass from '../assets/sass.png'
import python from '../assets/python.png'
import illustrator from '../assets/illustrator.png'
import graphql from '../assets/graphql.png'
import git from '../assets/git.png'
import project from '../assets/project.png'
import express from '../assets/express.png'
import jquery from '../assets/jquery.png'
import quasar from '../assets/quasar.svg'
import wordpress from '../assets/wordpress.png'
import react from '../assets/react.png'
import node from '../assets/node.png'
import docker from '../assets/docker.png'
import android from '../assets/android.png'
import xcode from '../assets/xcode.png'
import mysql from '../assets/mysql.svg'
import xd from '../assets/xd.png'
import photoshop from '../assets/photoshop.png'
import php from '../assets/php.svg'

const Skills = () => {
	return (
		<section id="skills">
			<Grid container id="skills-header">
				<Grid item xs={10}>
					<SectionHeader sectionTitle="Skills" sectionDescription="Awesome! Right?" />
				</Grid>
				<Grid item xs={2}>
					<NavIcon open={false} />
					<NavDrawer />
				</Grid>
			</Grid>
			<Grid container id="skills-icons" direction="column">
				<Grid container className="skills-inner" spacing={2}>
					<Grid item xs={4}>
						<img src={html} alt="HTML5" />
					</Grid>
					<Grid item xs={4}>
						<img src={css} alt="CSS3" />
					</Grid>
					<Grid item xs={4}>
						<img src={js} alt="JavaScript" />
					</Grid>
				</Grid>
				<Grid container className="skills-inner" spacing={2}>
					<Grid item xs={4}>
						<img src={angular} alt="Angular" />
					</Grid>
					<Grid item xs={4}>
						<img src={vue} alt="Vue.js" />
					</Grid>
					<Grid item xs={4}>
						<img src={laravel} alt="Laravel" />
					</Grid>
				</Grid>
				<Grid container className="skills-inner" spacing={2}>
					<Grid item xs={4}>
						<img src={sass} alt="SASS" />
					</Grid>
					<Grid item xs={4}>
						<img src={python} alt="Python" />
					</Grid>
					<Grid item xs={4}>
						<img src={docker} alt="Docker" />
					</Grid>
				</Grid>
				<Grid container className="skills-inner" spacing={2}>
					<Grid item xs={4}>
						<img src={graphql} alt="GraphQL" />
					</Grid>
					<Grid item xs={4}>
						<img src={git} alt="Git" />
					</Grid>
					<Grid item xs={4}>
						<img src={project} alt="Microsoft Project" />
					</Grid>
				</Grid>
				<Grid container className="skills-inner" spacing={2}>
					<Grid item xs={6}>
						<img src={express} alt="Express.js" className="long" />
					</Grid>
					<Grid item xs={6}>
						<img src={jquery} alt="jQuery" className="long" />
					</Grid>
				</Grid>
				<Grid container className="skills-inner" spacing={2}>
					<Grid item xs={6}>
						<img src={wordpress} alt="Wordpress" className="long" />
					</Grid>
					<Grid item xs={6}>
						<img src={quasar} alt="Quasar" className="long" />
					</Grid>
				</Grid>
				<Grid container className="skills-inner" spacing={2}>
					<Grid item xs={4}>
						<img src={react} alt="ReactJS/React Native" className="long" />
					</Grid>
					<Grid item xs={4}>
						<img src={node} alt="Node.js" className="long" />
					</Grid>
					<Grid item xs={4}>
						<img src={mysql} alt="MySQL" className="long" />
					</Grid>
				</Grid>
				<Grid container className="skills-inner" spacing={2}>
					<Grid item xs={4}>
						<img src={photoshop} alt="Native Android" />
					</Grid>
					<Grid item xs={4}>
						<img src={illustrator} alt="Native iOS" />
					</Grid>
					<Grid item xs={4}>
						<img src={xd} alt="MySQL" />
					</Grid>
				</Grid>
				<Grid container className="skills-inner" spacing={2}>
					<Grid item xs={4}>
						<img src={android} alt="Native Android" />
					</Grid>
					<Grid item xs={4}>
						<img src={php} alt="PHP" className="long" />
					</Grid>
					<Grid item xs={4}>
						<img src={xcode} alt="Native iOS" />
					</Grid>
				</Grid>
			</Grid>
		</section >
	)
}

export default Skills
