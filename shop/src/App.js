import { Button, Navbar, Container, Nav } from 'react-bootstrap'
import './App.css'

function App () {
  return (
    <div className='App'>
      <Navbar className='black-nav'>
        <Container>
          <Navbar.Brand href='#home'>Navbar</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#features'>Features</Nav.Link>
            <Nav.Link href='#pricing'>Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </div>
  )
}

export default App
