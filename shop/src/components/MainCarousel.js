import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'

export class MainCarousel extends Component {
  render () {
    return (
      <Carousel>
        <Carousel.Item interval={500}>
          <img
            className='d-block w-100'
            src={require('../assets/cover/firstImg.jpg')}
            alt='First slide'
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className='d-block w-100'
            src={require('../assets/cover/secondImg.jpg')}
            alt='Second slide'
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className='d-block w-100'
            src={require('../assets/cover/thirdImg.jpg')}
            alt='Third slide'
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}

export default MainCarousel
