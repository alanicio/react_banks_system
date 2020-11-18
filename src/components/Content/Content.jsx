import React, { useContext } from 'react'
import { BanksContext } from '../../context/BanksContext'
import BankCard from '../BankCard/BankCard'
import { Container } from './styled'

const Content = () => {
  const { banks } = useContext(BanksContext);
  const BanksCards = banks.map( ({ pk, name }) => <BankCard key={pk} id={pk}  name={name} /> );

  return (
    <Container>
      { BanksCards }
    </Container>
  )
}

export default Content
