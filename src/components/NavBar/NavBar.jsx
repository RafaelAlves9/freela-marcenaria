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
                <Navbar.Brand href="#home"><Logo>BAIAS SOUZA</Logo></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link href="#aboutus"><Opicion>Sobre nós</Opicion></Nav.Link>
                        <Nav.Link href="#works"><Opicion>Nossos trabalhos</Opicion></Nav.Link>
                        <Nav.Link href="#values"><Opicion>Medidas</Opicion></Nav.Link>
                        <Nav.Link href="https://api.whatsapp.com/send?phone=5521985834445&text=Ol%C3%A1%2C%20estou%20interessado%20nas%20baias!" target='_blank'><Opicion>Contato</Opicion></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
