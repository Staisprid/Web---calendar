import React from 'react';
import styled from 'styled-components';

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
const ButtonCell = styled.div`
  width: 50%;
  font-size: 30px;
  font-weight: 500;
  color: red;
  @media (max-width: 550px) {
    font-size: 25px;
  }
`;

const Today = styled.div`
  padding-left: 70px;
  padding-top: 30px;
  text-align: left;
`;

const TodayName = styled.span`
  cursor: pointer;
`;

const Delete = styled.div`
  text-align: right;
  padding-right: 50px;
  padding-top: 25px;
`;

const DeleteName = styled.span`
  cursor: pointer;
`;
class ButtonBlock extends React.Component {
  deleteCall = () => {
    if (this.props.deletRecord === 'true') {
      return (
        <Delete>
          <DeleteName onClick={() => this.props.deleteEvent()}>Delete</DeleteName>
        </Delete>
      );
    } else {
      return <div />;
    }
  };
  render() {
    return (
      <GridWrapper>
        <ButtonCell>
          <Today>
            <TodayName onClick={() => this.props.todayOnClick()}>Today</TodayName>
          </Today>
        </ButtonCell>
        <ButtonCell>{this.deleteCall()}</ButtonCell>
      </GridWrapper>
    );
  }
}
export default ButtonBlock;
