import styled from "styled-components";

const SidebarOptionDiv = styled.section`
  display:flex;
  align-items: center;
  color: grey;
  height: 40px;
  cursor: pointer;
  transition: 200ms color ease-in;
  padding-left: 10px;
  padding-right: 10px;
  :hover{
    color: white;
  }
`
const SidebarOption__icon = styled.div`
  padding-left: 10px;
  padding-right: 10px;
`

function SidebarOption({ title , Icon }) {
  return (
    <SidebarOptionDiv>
       {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </SidebarOptionDiv>
  );
}

export default SidebarOption;