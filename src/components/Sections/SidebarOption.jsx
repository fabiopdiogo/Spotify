import styled from "styled-components";

const SidebarOptionDiv = styled.section`
  color: grey;
  height: 40px;
  cursor: pointer;
  transition: 200ms color ease-in;

  :hover{
    color: white;
  }
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