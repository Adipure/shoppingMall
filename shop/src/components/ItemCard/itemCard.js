import React, { navigate, useState } from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import data from './data'

const ItemCard = (props) => {
  const [shoes] = useState(data)
  return (
    <CardGroup>
      <Card>
        <Card.Img variant='top' src={require('../../assets/items/firstShoes.jpg')} height='auto' object-fit='cover' />
        <Card.Body>
          <Card.Title>{shoes[0].title}</Card.Title>
          <Card.Text>
            <h4>{shoes[0].content}</h4>
            <p>{shoes[0].price}</p>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className='text-muted'>Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant='top' src={require('../../assets/items/secondShoes.jpg')} height='auto' object-fit='cover' />
        <Card.Body>
          <Card.Title>{shoes[1].title}</Card.Title>
          <Card.Text>
            <h4>{shoes[1].content}</h4>
            <p>{shoes[1].price}</p>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className='text-muted'>Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant='top' src={require('../../assets/items/thirdShoes.jpg')} height='auto' object-fit='cover' />
        <Card.Body>
          <Card.Title>{shoes[2].title}</Card.Title>
          <Card.Text>
            <h4>{shoes[2].content}</h4>
            <p>{shoes[2].price}</p>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className='text-muted'>Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  )
}

export default ItemCard
