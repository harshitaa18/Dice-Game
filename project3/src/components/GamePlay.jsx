import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import Rolldice from './Rolldice'
import { useState } from 'react'
import { Button } from '../styled/Button'
import Rules from './Rules'

const GamePlay = () => {
    const [score, setScore] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice]=useState(1);
    const [error, setError] = useState("");
    const [showRules, setshowRules] = useState(false);

    const generateRandomNumber = (min, max) =>{return Math.floor(Math.random()*(max-min)+min);
    };

    const roleDice = () => {

        if(!selectedNumber){
            setError("You have not selected any number");
            return
        }
        setError("");
        const randomNumber = generateRandomNumber(1,7);
        setCurrentDice((prev)=>randomNumber);

        if(selectedNumber==randomNumber){
            setScore((prev)=>prev+randomNumber);
        }else{
            setScore((prev)=>prev-2);
        }
        setSelectedNumber(undefined);
    };

    const resetScore = () => {
        setScore(0);
    } 
    return (
    <MainContainer>
        <div className='top_section'>
        <TotalScore score={score}/>
        <NumberSelector error={error} setError={setError} selectedNumber={selectedNumber}  setSelectedNumber={setSelectedNumber}/>
        </div>
        <div className='main_section'>
        <Rolldice currentDice={currentDice} roleDice={roleDice}/>
        <div className='btn'>
            <Button onClick={resetScore}>Reset Score</Button>
            <Button onClick={()=>setshowRules((prev)=>!prev)}>{showRules ? "Hide" : "Show"} Rules</Button>
        </div>
        {showRules && <Rules/>}
        </div>
    </MainContainer>
  )
}

export default GamePlay;
const MainContainer = styled.main`
    padding-top: 20px;
    .top_section {
        display: flex;
        justify-content: space-around;
        align-items: end;
    }
    .btn {
        padding-top: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

`;
