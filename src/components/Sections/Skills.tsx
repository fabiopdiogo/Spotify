import React from 'react';

import styled from 'styled-components';

import SkillCard from '../Elements/SkillCard';

const DivMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%; 
`

const H1 = styled.h1`
  font-size:85px;  
  color: orange;
  @media (max-width: 676px){
    font-size:45px; 
  }
`
const Subtitle = styled.p`
  padding-bottom: 50px;
`
const CardsFit = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;

  @media (max-width: 397px){
    flex-direction: column;
  }
`
const Fit1 = styled.div`
  display: flex;
  flex-direction: row; 
  gap: 5px;

  @media(max-width:1100px){
    flex-direction: column; 
  }
`
const Fit2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;

  @media(max-width:1100px){
    flex-direction: column; 
  }
`

interface Props{
  id: string
}

function Projects ({id}: Props){
  return( 
      <a id={id}><DivMain>
        <H1> Minhas Skills </H1>
        <Subtitle>O HTML eo CSS foram as primeiras tecnologias que tive contato no meu curso tecnico lé em 2013 porem ainda sem dominar a pratica.<br />
        Todas as tecnologias restantes adquiri seus conhecimentos a partir da metade de 2021 quanto aprofundei nos estudos de front end fazendo cursos, bootcamps e participando de mentorias.</Subtitle>
        <CardsFit>
          <Fit1>
            <SkillCard src="./Skills/icons8-css3-240.png" name="CSS" />
            <SkillCard src="./Skills/html-5.png" name="HTML5"/>
            <SkillCard src="./Skills/icons8-next.js-240.png" name="Next.js"/> 
          </Fit1>
          <Fit2>
            <SkillCard src="./Skills/icons8-react-native-240.png" name="React.js"/>
            <SkillCard src="./Skills/icons8-javascript-240.png" name="JavaScript"/> 
            <SkillCard src="./Skills/icons8-typescript-240.png" name="TypeScript"/>           
          </Fit2>
              

        </CardsFit>

      </DivMain> 
      </a>  
  )
}

export default Projects;