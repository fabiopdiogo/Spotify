import React from 'react';

import styled from 'styled-components';

const Form = styled.form`
  display: flex;  
  flex-direction: column;
  margin-bottom: 50px;
  input{
    margin: 8px 0;
    background-color: #252527;
    padding: 15px 20px;
    color: white;
    border: none;    
    width:100%; 

    ::placeholder{
      color: orange;
    }
    @media(max-width:1100px){
      max-width: auto;
    }
  } 

`
const Email = styled.div`
  display: flex;
  justify-content: row;
  gap:5px; 
`
const Subject = styled.div`
  display: flex;
  gap:5px; 
`
const Message = styled.div`
  display: flex;
  gap:5px;  
`
const Button = styled.button`
    height: 50px;
    background-color: #252527;   
    color: orange;
    border: none;
`

const A = styled.a`
  &:link{
    text-decoration: none;
  }
`
const H1 = styled.h1`
  font-size:85px;
  color: orange;
  @media (max-width: 676px){
    font-size:45px; 
  }
`

interface Props{
  id: string
}

function Contact ({id}: Props){
  return(
    <A id={id}>
      <H1>Contato</H1>
      <p>Estou aberto para propostas de emprego CLT ou como Freelancer. Se você gostou do meu trabalho, entre em contato comigo!</p>
      <Form  action="https://formsubmit.co/f0a3e2cf185ee081a8f024318323010e" method="POST" >
                  <Email>
                      <input type="email" name="email"  placeholder="E-mail" required/>
                  </Email>
                  <Subject>
                      <input type="text" id="subject" name="subject" placeholder="Assunto"required/>
                  </Subject>
                  <Message>
                      <input type="text" id="message" name="message" placeholder="Mensagem"required/>
                  </Message> 
                  <Button type="submit">Enviar</Button>                  
      </Form>
    </A>
  )
}

export default Contact