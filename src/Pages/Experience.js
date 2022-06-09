import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCards from '../Components/ProjectCards/ProjectCards';
import Particle from '../Components/Particles/Particle';
import laptopImg from '../Assets/coding.png';
import bykea from '../Assets/BYKEA.png';

function Projects() {
	return (
		<Container fluid className='project-section'>
			<Particle />
			<Container>
				<h1 className='project-heading'>
					Technical <strong className='purple'>Experience </strong>
				</h1>
				<p style={{ color: 'white' }}>
					Here are Some Roles I have worked as
				</p>
				<Row
					style={{ justifyContent: 'center', paddingBottom: '10px' }}>
					<Col md={6} className='project-card'>
						<ProjectCards
							imgPath={laptopImg}
							title={
								<span>
									<strong className='purple'>
										MERN Stack Developer
									</strong>
									&nbsp;at Coding Cops (07/2020 - 12/2021)
								</span>
							}
							description={
								<strong>
									Custom Software Development & Consulting
									Company
								</strong>
							}
							role_description={
								<div style={{ marginTop: '20px' }}>
									<ul>
										<li>
											Worked closely with team members to
											plan, design and develop robust
											solutions in a timely manner.
										</li>

										<li>
											Debugged complex production issues
											using Chrome debugger tools and
											other custom in house debugging
											tools and libraries.
										</li>

										<li>
											RESTful API design and development
											using NodeJs and ExpressJs.
										</li>
										<li>
											Modiﬁed existing application to
											correct errors, upgrade interfaces
											and improve performance.
										</li>
										<li>
											Worked on writing and maintaining
											extensible code in a team
											environment.
										</li>
										<li>
											Test components using Jest and
											Enzyme to make sure they are
											production ready and peer review the
											code and ﬂow.
										</li>
									</ul>
								</div>
							}
							link='https://codingcops.com/'
						/>
					</Col>
					<Col md={6} className='project-card'>
						<ProjectCards
							imgPath={bykea}
							title={
								<span>
									<strong className='purple'>
										NodeJs Developer
									</strong>{' '}
									at BYKEA (01/2022 - Present)
								</span>
							}
							description={
								<strong>
									Pakistan's No.1 Ride Hailing Service and
									Parcel Delivery Company
								</strong>
							}
							role_description={
								<div style={{ marginTop: '20px' }}>
									<ul>
										<li>
											Working with the team on Groccery
											Vertical to plan, design and develop
											eficient solutions for the real time
											ecommerce problems.
										</li>
										<li>
											Gathered and validated requirements
											as a part of a collaboration for a
											progressive web application that
											helped develop clear, unambiguous
											technical requirements and establish
											a consistent feedback loop.
										</li>

										<li>
											Contributing to the design and
											development of APIs with performance
											and scalability in mind.
										</li>
										<li>
											Designing RESTFUL APIs using NodeJs,
											ExpressJs, Fastify, Mongodb and
											PostgreSQL.
										</li>
										<li>
											Optimized legacy data storage and
											search functionality for the
											progressive web app, minimizing the
											average response time by 63%.
										</li>
									</ul>
								</div>
							}
							link='https://bykea.com'
						/>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}
export default Projects;
