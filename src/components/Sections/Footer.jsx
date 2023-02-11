import styled from "styled-components";

const FooterDiv = styled.section`
  position: fixed;
  bottom: 0;
  height: 65px;
  width: 100%;
  background-color: #282828;
  padding: 20px;
`

function Footer(){
  return(
    <FooterDiv>
        <p>footer</p>
    </FooterDiv>
  )
}
export default Footer;