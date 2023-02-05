import React from 'react';

import styled from 'styled-components';


const H1 = styled.h1`
  font-size:85px;
  color: orange;

  @media (max-width: 676px){
    font-size:45px;  
  }
`
const DivMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%; 
`

const CardsFit = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-top: 40px;
`
const Fit1 = styled.div`
  display: flex;
  gap: 5px;  
  width: 100%;  
  
  @media(max-width:1100px){
    flex-direction: column;
  }
`
const Fit2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;  
  width: 100%;  

  @media(max-width:1100px){    
    flex-direction: column; 
  }
`

interface Props{
  id: string
}

function Skills ({id}: Props){
  return( 
      <a id={id}>
        <DivMain>
          <H1> Principais Projetos </H1>
          <p>Esses aqui são alguns dos principais projetos que eu realizei ate aqui durante essa minha jornada de estudo.</p>
          <CardsFit>
            <Fit1>
           
            </Fit1>
            <Fit2>

            </Fit2>
          </CardsFit>
        </DivMain> 
      </a>  
  )
}

export default Skills;