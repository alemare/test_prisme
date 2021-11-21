import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

// MOCK
import headerMock from '../../../../mocks/header.mock.json';

// STYLES
import { HeaderContainer } from './Header.styled';

const Header = () => (
    <HeaderContainer>
        <Navbar className="navbar-content" expand="lg" fixed="top">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="mobile-navbar" variant="dark" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                    <Nav>
                        {
                            headerMock && (headerMock.length > 0) &&
                            headerMock.map((elem) => (
                                <Nav.Link href={elem.href}>
                                    {elem.label}
                                </Nav.Link>
                            ))
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </HeaderContainer>
);

export default Header;
