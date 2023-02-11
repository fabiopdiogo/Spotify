import styled from "styled-components";

const BodyDiv = styled.section`
  flex: 0.8;
  background-color: rgb(91, 87, 115);
  background: linear-gradient(rgb(91, 87, 115), rgba(0,0,0,1));
  height: 100vh;
  color: white;
`

function Body(){
  return(
    <BodyDiv>
      <p>body</p>
    </BodyDiv>
  )
}
export default Body;