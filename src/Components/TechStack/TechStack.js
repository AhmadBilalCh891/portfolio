import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Tooltip from '@mui/material/Tooltip';

import {
	DiJavascript1,
	DiNodejs,
	DiReact,
	DiRedis,
	DiMongodb,
	DiPostgresql,
} from 'react-icons/di';
import {
	SiTypescript,
	SiRedux,
	SiElasticsearch,
	SiExpress,
	SiFastify,
	SiGraphql,
	SiMicrostrategy,
} from 'react-icons/si';

function Techstack() {
	return (
		<Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
			<Col xs={4} md={2} className='tech-icons'>
				<Tooltip title='TypeScript' placement='top' arrow>
					<span>
						<SiTypescript />
					</span>
				</Tooltip>
			</Col>

			<Col xs={4} md={2} className='tech-icons'>
				<Tooltip title='JavaScript' placement='top' arrow>
					<span>
						<DiJavascript1 />
					</span>
				</Tooltip>
			</Col>

			<Col xs={4} md={2} className='tech-icons'>
				<Tooltip title='NodeJs' placement='top' arrow>
					<span>
						<DiNodejs />
					</span>
				</Tooltip>
			</Col>

			<Col xs={4} md={2} className='tech-icons'>
				<Tooltip title='Postgresql' placement='top' arrow>
					<span>
						<DiPostgresql />
					</span>
				</Tooltip>
			</Col>

			<Col xs={4} md={2} className='tech-icons'>
				<Tooltip title='Mongodb' placement='top' arrow>
					<span>
						<DiMongodb />
					</span>
				</Tooltip>
			</Col>

			<Col xs={4} md={2} className='tech-icons'>
				<Tooltip title='ExpressJs' placement='top' arrow>
					<span>
						<SiExpress />
					</span>
				</Tooltip>
			</Col>

			<Col xs={4} md={2} className='tech-icons'>
				<Tooltip title='FastifyJs' placement='top' arrow>
					<span>
						<SiFastify />
					</span>
				</Tooltip>
			</Col>

			<Col xs={4} md={2} className='tech-icons'>
				<Tooltip title='GraphQL' placement='top' arrow>
					<span>
						<SiGraphql />
					</span>
				</Tooltip>
			</Col>

			<Col xs={4} md={2} className='tech-icons'>
				<Tooltip title='Elastic Search' placement='top' arrow>
					<span>
						<SiElasticsearch />
					</span>
				</Tooltip>
			</Col>

			<Col xs={4} md={2} className='tech-icons'>
				<Tooltip title='Redis' placement='top' arrow>
					<span>
						<DiRedis />
					</span>
				</Tooltip>
			</Col>

			<Col xs={4} md={2} className='tech-icons'>
				<Tooltip title='MicroServices' placement='top' arrow>
					<span>
						<SiMicrostrategy />
					</span>
				</Tooltip>
			</Col>

			<Col xs={4} md={2} className='tech-icons'>
				<Tooltip title='ReactJs' placement='top' arrow>
					<span>
						<DiReact />
					</span>
				</Tooltip>
			</Col>

			<Col xs={4} md={2} className='tech-icons'>
				<Tooltip title='Redux' placement='top' arrow>
					<span>
						<SiRedux />
					</span>
				</Tooltip>
			</Col>
		</Row>
	);
}

export default Techstack;
