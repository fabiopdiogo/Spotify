import styled from "styled-components"
import Login from "./components/Sections/Login"
const AppDiv= styled.section`

`
function App(){
  return(
    <AppDiv>
        <p>Olá mundo</p>

        <Login/>
    </AppDiv>
  )
}
export default App
