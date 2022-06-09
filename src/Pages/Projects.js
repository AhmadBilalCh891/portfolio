import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCards from '../Components/ProjectCards/ProjectCards';
import Particle from '../Components/Particles/Particle';
import prdHub from '../Assets/prd-dashboard.png';
import invoicerApp from '../Assets/invoicerApp.png';

function Projects() {
	return (
		<Container fluid className='project-section'>
			<Particle />
			<Container>
				<h1 className='project-heading'>
					My Recent <strong className='purple'>Works </strong>
				</h1>
				<p style={{ color: 'white' }}>
					Here are a few projects I've worked on recently.
				</p>
				<Row
					style={{ justifyContent: 'center', paddingBottom: '10px' }}>
					<Col md={6} className='project-card'>
						<ProjectCards
							imgPath={invoicerApp}
							title='Invoicer App'
							description="This is a side project I've been working on. A full stack invoicing application made using the MERN stack (MongoDB, Express, React & Nodejs), specially designed for superstores and small businesses, but can be used for almost any type of business need. With this application, you can generate and send beautiful invoices, receipts, estimates, quotes, bills etc to your clients. You can track your inventry and business transactions with clients. This project is something I've been working on in my free time so it's not completed yet. I will deploy it somwhere once I have most of its functionlaity in running form."
							link='https://github.com/AhmadBilalCh891/invoicer-app'
						/>
					</Col>
					<Col md={6} className='project-card'>
						<ProjectCards
							imgPath={prdHub}
							title='Product Hub'
							description='SaaS software to help hardware engineers to manage the design and manufacturing of their custom hardware products. GitHub did an excellent job, you can have a single cloud-hosted source of your source code control, and then you build an ecosystem of tools and people and tasks around it. And everyone’s always pointing to GitHub. ProductHub does the same by centralizing designs and manufacturing of hardwares. You can manage and compare different versions of your hardware. I have worked on this porject while working with a client.'
							link='https://github.com/AhmadBilalCh891'
						/>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}
export default Projects;
