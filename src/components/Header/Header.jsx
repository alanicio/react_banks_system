import React from 'react'
import { Container, Icon } from './styled'

const Header = () => {
  return (
    <Container>
      <Icon className="fas fa-arrow-left" display="none"></Icon>
      <h1>Titulo de vista</h1>
    </Container>
  )
}

export default Header
