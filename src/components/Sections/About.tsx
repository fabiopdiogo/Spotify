import React from 'react';

import styled from 'styled-components';

import Cards from '../Elements/Cards';

const H1 = styled.h1`
  font-size:85px;
  color: orange;
  @media (max-width: 676px){
    font-size:45px;
  }
`
const DivMain = styled.section`
  display: flex;
  flex-direction: column;
`
const Content = styled.section`
  display: flex;
  flex-direction: column;
`
const P = styled.p`
  display: flex;
`

interface Props{
  id: string
}

function About ({id}: Props){
  return( 
      <a id={id}>
      <DivMain>
        <H1> Sobre mim </H1>
        <Content>
          <P> Sou o Fabio e sou da cidade de Sabará-MG, na região da grande BH. Moro com minha família que é são minha mãe e meu irmão.<br />
            Comecei a gostar de informática quando tinha 12 anos quando ganhei meu primeiro computador.<br /> 1 ano depois entrei no curso de Tecnico em Informática na minha escola do ensino médio, pelo Pronatec.<br />
            Depois que formei no curso técnico junto com o ensino médio, ainda sem saber ao certo a carreira que eu seguiria, em 2017 comecei a cursar a faculdade de Engenharia Eletrica.<br />
            No ano seguinte, consegui passar no processo seletivo do IFMG para fazer Sistemas de Informação.<br /> Nesse ponto já sabia que eu queria trabalhar com código, mas não sabia a área específica.<br />
            E com os projetos feitos em trabalhos de faculdade, descobri o JavaScript que me abriu as portas para o desenvolvimento Front-End, que é a área em que estou me especializando.<br />
            Sou uma pessoa que cultiva todos os valores de uma pessoa de bom caráter e que ama a sua família acima de tudo. <br />
            Sou uma pessoa paciente, honesta, justa, proativa , determinada e resiliente , e sempre estou a desenvolver novos hábitos para o meu desenvolvimento pessoal e profissional. 
          </P> 
        </Content>         
      </DivMain>   
      </a>
  )
}

export default About;