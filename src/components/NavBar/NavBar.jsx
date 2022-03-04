import {
    Navbar,
    Container,
    Nav
} from 'react-bootstrap';
import {
    Logo,
    Opicion
} from './Styled'

export default function NavBar(){
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home"><Logo>BAIA'S SOUZA</Logo></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link href="#aboutus"><Opicion>Sobre nós</Opicion></Nav.Link>
                        <Nav.Link href="#works"><Opicion>Trabalhos</Opicion></Nav.Link>
                        <Nav.Link href="#values"><Opicion>Valores</Opicion></Nav.Link>
                        <Nav.Link href="#feedback"><Opicion>Clientes satisfeitos</Opicion></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}