import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
    <Rules_contain>
      <h2>How to play dice game</h2>
      <div className='text'>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
        <p>if you get wrong guess then  2 point will be dedcuted </p>
      </div>
    </Rules_contain>
  )
}

export default Rules

const Rules_contain = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #FBF1F1;
    margin-top: 10px;
    h2 {
        font-size: 24px;
        font-weight: 900;
    }
    .text {
        margin-top: 24px;
        font-weight: 700;
    }

`;