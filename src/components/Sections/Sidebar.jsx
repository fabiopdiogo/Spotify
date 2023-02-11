import styled from "styled-components";

const SidebarDiv = styled.section`
  display: flex;
  flex-direction: column;
  flex: 0.2;
  padding-left: 10px;
  padding-right: 10px;
  min-width: 230px;
  height: 100vh;
  color: white;
  background-color: #040404;
`
const Image = styled.img`
  margin-right: auto;
  object-fit: contain;
  height: 70px;
  padding: 10px;
`
function Sidebar(){
  return(
    <SidebarDiv>
        <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />
    </SidebarDiv>
  )
}
export default Sidebar;