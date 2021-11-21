import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// STYLES
import { FooterContainer } from './Footer.styled';

// ASSETS
import DarthVader from '../../../../assets/darthvader.jpg';
import IconFacebook from '../../../../assets/icon_facebook.png';
import IconTwitter from '../../../../assets/icon_twitter.png';
import IconInstagram from '../../../../assets/icon_instagram.png';

const Footer = () => (
    <FooterContainer backgroundImage={DarthVader}>
        <Container>
            <h5 className="copyright-title"><b>TM Lucasfilm</b> Ltd. All Rights Reserved.</h5>
            
            <Row>
                <Col className="column-footer" md={4}>
                    <ul>
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Legal Notices</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </Col>

                <Col className="column-footer" md={4}>
                    <ul>
                        <li><a href="#">Your California Privacy Rights</a></li>
                        <li><a href="https://www.shopdisney.fr/personnages-et-films/star-wars" target="_blank">Star Wars at Disney Store</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </Col>

                <Col className="column-footer" md={4}>
                    <p>Follow Star Wars</p>
                    <div className="social-network">
                        <div>
                            <a href="#"><img src={IconFacebook} alt="Facebook" /></a>
                        </div>
                        <div>
                            <a href="#"><img src={IconTwitter} alt="Twitter" /></a>
                        </div>
                        <div>
                            <a href="#"><img src={IconInstagram} alt="Instagram" /></a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </FooterContainer>
);

export default Footer;
