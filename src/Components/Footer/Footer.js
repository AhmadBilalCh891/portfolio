import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
	AiFillGithub,
	AiFillInstagram,
	AiFillFacebook,
	AiFillTwitterSquare,
} from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import './footer.css';

function Footer() {
	return (
		<Container fluid className='footer'>
			<Row>
				<Col md='4' className='footer-copywright'>
					<h3>Copyright © 2021</h3>
				</Col>
				<Col md='4' className='footer-copywright'>
					<h3>Ahmad Bilal</h3>
				</Col>
				<Col md='4' className='footer-body'>
					<ul className='footer-icons'>
						<li className='social-icons'>
							<a
								href='https://www.facebook.com/people/AB-Ch/100010951541069/'
								style={{ color: 'white' }}
								target='_blank'
								rel='noopener noreferrer'>
								<AiFillFacebook />
							</a>
						</li>
						<li className='social-icons'>
							<a
								href='https://github.com/AhmadBilalCh891'
								style={{ color: 'white' }}
								target='_blank'
								rel='noopener noreferrer'>
								<AiFillGithub />
							</a>
						</li>

						<li className='social-icons'>
							<a
								href='https://www.linkedin.com/in/ahmad-bilal-920637165/'
								style={{ color: 'white' }}
								target='_blank'
								rel='noopener noreferrer'>
								<FaLinkedinIn />
							</a>
						</li>
						<li className='social-icons'>
							<a
								href='https://www.instagram.com/ahmadbilal891/'
								style={{ color: 'white' }}
								target='_blank'
								rel='noopener noreferrer'>
								<AiFillInstagram />
							</a>
						</li>
						<li className='social-icons'>
							<a
								href='https://twitter.com/I_am_AB_Ch'
								style={{ color: 'white' }}
								target='_blank'
								rel='noopener noreferrer'>
								<AiFillTwitterSquare />
							</a>
						</li>
					</ul>
				</Col>
			</Row>
		</Container>
	);
}

export default Footer;
