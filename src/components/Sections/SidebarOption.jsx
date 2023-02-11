import styled from "styled-components";

const SidebarOptionDiv = styled.section`
  margin-right: auto;
  object-fit: contain;
  height: 70px;
  padding: 10px;
`

function SidebarOption({ option = "test", Icon }) {
  return (
    <SidebarOptionDiv>
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4>{option}</h4> : <p>{option}</p>}
    </SidebarOptionDiv>
  );
}

export default SidebarOption;