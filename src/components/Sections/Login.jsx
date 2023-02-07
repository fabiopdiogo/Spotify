import React from 'react'
import styled from 'styled-components'
import { loginUrl } from '../../spotify'
const LoginDiv = styled.section`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: black;
`
const Image = styled.img`
  width: 100%;
`

const A = styled.a`
  padding: 20px;
  border-radius: 99px;
  background-color: #1db954;
  font-weight: 800;
  color: white;
  text-decoration: none;

`
function Login(){
  return(
    <LoginDiv>
      <h1>Im the login page</h1>
      <Image
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <A href={loginUrl}>Login with Spotify</A>
    </LoginDiv>
  )
}

export default Login