import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Tooltip from '@mui/material/Tooltip';
import { DiGit } from 'react-icons/di';
import {
	SiLinux,
	SiVisualstudiocode,
	SiPostman,
	SiAmazonaws,
	SiDocker,
	SiPhpmyadmin,
	SiGitlab,
	SiJira,
	SiGooglechrome,
	SiHeroku,
	SiNetlify,
} from 'react-icons/si';

function ToolStack() {
	return (
		<Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
			<Col xs={4} md={2} className='tech-icons'>
				<Tooltip title='Linux' placement='top' arrow>
					<span>
						<SiLinux />
					</span>
				</Tooltip>
			</Col>

			<Col xs={4} md={2} className='tech-icons'>
				<Tooltip title='Visual Studio Code' placement='top' arrow>
					<span>
						<SiVisualstudiocode />
					</span>
				</Tooltip>
			</Col>

			<Col xs={4} md={2} className='tech-icons'>
				<Tooltip title='Postman' placement='top' arrow>
					<span>
						<SiPostman />
					</span>
				</Tooltip>
			</Col>

			<Col xs={4} md={2} className='tech-icons'>
				<Tooltip title='AWS' placement='top' arrow>
					<span>
						<SiAmazonaws />
					</span>
				</Tooltip>
			</Col>

			<Col xs={4} md={2} className='tech-icons'>
				<Tooltip title='Docker' placement='top' arrow>
					<span>
						<SiDocker />
					</span>
				</Tooltip>
			</Col>

			<Col xs={4} md={2} className='tech-icons'>
				<Tooltip title='PostgreSQL Server' placement='top' arrow>
					<span>
						<SiPhpmyadmin />
					</span>
				</Tooltip>
			</Col>

			<Col xs={4} md={2} className='tech-icons'>
				<Tooltip title='Git' placement='top' arrow>
					<span>
						<DiGit />
					</span>
				</Tooltip>
			</Col>

			<Col xs={4} md={2} className='tech-icons'>
				<Tooltip title='GitLab' placement='top' arrow>
					<span>
						<SiGitlab />
					</span>
				</Tooltip>
			</Col>

			<Col xs={4} md={2} className='tech-icons'>
				<Tooltip title='Jira' placement='top' arrow>
					<span>
						<SiJira />
					</span>
				</Tooltip>
			</Col>

			<Col xs={4} md={2} className='tech-icons'>
				<Tooltip title='Google Chrome' placement='top' arrow>
					<span>
						<SiGooglechrome />
					</span>
				</Tooltip>
			</Col>

			<Col xs={4} md={2} className='tech-icons'>
				<Tooltip title='Heroku' placement='top' arrow>
					<span>
						<SiHeroku />
					</span>
				</Tooltip>
			</Col>

			<Col xs={4} md={2} className='tech-icons'>
				<Tooltip title='Netlify' placement='top' arrow>
					<span>
						<SiNetlify />
					</span>
				</Tooltip>
			</Col>
		</Row>
	);
}

export default ToolStack;
