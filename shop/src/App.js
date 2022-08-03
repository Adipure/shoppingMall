/* eslint-disable react/style-prop-object */
import { useState } from 'react'
import { Button, Navbar, Container, Nav } from 'react-bootstrap'
import './App.css'
import MainCarousel from './components/MainCarousel'
import MainitemCard from './components/ItemCard/itemCard'

function App () {
  return (
    <div className='App'>
      <Navbar className='black-nav'>
        <Container>
          <Navbar.Brand href='#home'>AWOS Style</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#features'>Features</Nav.Link>
            <Nav.Link href='#newarrived'>New Arrived</Nav.Link>
            <Nav.Link href='#cart'>Cart</Nav.Link>
            <Nav.Link href='#checkout'>Check Out</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* <MainCarousel className='carousel' /> */}
      <MainitemCard />
    </div>
  )
}

export default App
