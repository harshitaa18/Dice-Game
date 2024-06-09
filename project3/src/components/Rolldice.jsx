import React, { useState } from 'react'
import styled from 'styled-components';

const Rolldice = ({currentDice, roleDice}) => {
    
  return (
    <Dice>
    <div className='dice' onClick={roleDice}>
      <img src={`/images/dice_${currentDice}.png`} alt="dice" />
      <p>Click on Dice to roll</p>
    </div>
    </Dice>
  )
}

export default Rolldice;
const Dice = styled.div`
    margin-top: 48px;
    display: flex;
    justify-content: center;

    p {
        font-size: 24px;
        font-weight: 700;
        padding-left: 12px;
    }

`
