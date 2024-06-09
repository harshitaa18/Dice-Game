import React from 'react'
import styled from 'styled-components'
import { Button } from '../styled/Button'

const Start_game = ({toggle}) => {
  return (
    <Container>
        <img src="./images/dices 1.png" alt="dices" />
        <div className='content'>
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
  )
}

export default Start_game
const Container = styled.div`
    display: flex;
    max-width: 1180px;
    margin: 0 auto;
    height: 100vh;
    align-items: center;

  .content h1 {
    font-size: 96px;
    white-space: nowrap;
  }
`;


