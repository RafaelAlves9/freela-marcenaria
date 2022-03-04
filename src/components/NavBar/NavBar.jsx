import {
    Navbar,
    Container,
    Nav
} from 'react-bootstrap';
import { Logo } from './Styled'

export default function NavBar() {
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home"><Logo>BAIA'S SOUZA</Logo></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link href="#a">Sobre nós</Nav.Link>
                        <Nav.Link href="#b">Trabalhos</Nav.Link>
                        <Nav.Link href="#c">Valores</Nav.Link>
                        <Nav.Link href="#d">Clientes</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}