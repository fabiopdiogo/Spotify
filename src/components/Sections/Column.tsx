import React from 'react';

import styled from 'styled-components';

const DivMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 20%;
  height: 100vh;
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;

  @media(max-width:1100px){
    display: none;
  }
`
const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;    
  width: 100%;
  gap: 5px;
`

const Socials = styled.span`
  display: flex;
  align-items: center;  
  justify-content: center;
  gap: 5px;
`
const Image = styled.img`
  width: 24px;
  height:24px;
`
const A = styled.a`
  display: flex;
  align-items: center;  
  justify-content: center;
  border-block: solid;
  writing-mode: horizontal-tb;
  border-color: orange;   
  width: 100%;  
  color: #ececec;  
  &:link{
    text-decoration: none;
  }
`
const Open = styled.img`
  display: none;
  
  @media(max-width:1100px){
  display:flex;
  position: absolute;
  top: 1px;
  right: 1px;
  padding: 20px;
  cursor: pointer;
  }
`

function Column (){

  return(   
    <>      
      <DivMain>
          <A href="#beginning">Inicio</A>
          <ButtonsDiv>

          </ButtonsDiv>

          
      </DivMain>
    </>

  )
}
export default Column