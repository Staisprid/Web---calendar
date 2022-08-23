import React from 'react';
import styled from 'styled-components';
import { BsPlusLg } from 'react-icons/bs';

const HeaderWrapper = styled.header`
  background-color: ${(props) => props.theme.calendar_bg};
  height: 100px;
  position: sticky;
  z-index: 24;
  top: 0;
`;

const ProjectName = styled.div`
  text-align: left;
  font-size: 24px;
  padding: 25px;
  float: left;
`;

const PlusWrapper = styled.div`
  text-align: right;
  font-size: 24px;
  padding: 25px 50px 0 0;
  float: right;
  color: red;
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

class Header extends React.Component {
  render() {
    return (
      <HeaderWrapper>
        <ProjectName>Interview Calendar</ProjectName>
        <PlusWrapper>
          <BsPlusLg onClick={() => this.props.createEvent()} />
        </PlusWrapper>
      </HeaderWrapper>
    );
  }
}
export default Header;
