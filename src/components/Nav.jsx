import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { MdArrowBackIos } from 'react-icons/md';
import { CalendarCell, InnerCell } from './theme/ThemeDefault';

const CurrentDay = styled.div`
  font-weight: bold;
  font-size: 23px;
  margin: auto;
  line-height: 40px;
  text-align: center;
  width: 40px;
  height: 40px;
  ${({ active }) =>
    active &&
    `
    color: #fff;
    border-radius:25px;
    background-color:red;
    
  `}
  @media (max-width: 500px) {
    font-size: 20px;
    line-height: 30px;
    width: 30px;
    height: 30px;
  }
`;

const CurrentMonth = styled.div`
  font-size: 23px;
  font-weight: bold;
  text-align: center;
  @media (max-width: 550px) {
    font-size: 18px;
  }
`;
const MonthDay = styled.div`
  margin-bottom: 20px;
`;

const MonthDayInner = styled.div`
  text-align: center;
  padding: 10px 0 10px 0;
  font-size: 21px;
  font-weight: bold;
  right: 30px;
`;

const NextWeek = styled.div`
  color: red;
  font-size: 25px;
  text-align: center;
  cursor: pointer;
  @media (max-width: 500px) {
    font-size: 21px;
  }
`;
const PrevWeek = styled(NextWeek)``;

class Nav extends React.Component {
  render() {
    let startWeek = moment(this.props.date).startOf('isoWeek');
    let endWeek = moment(this.props.date).endOf('isoWeek');

    const week = [];
    while (startWeek <= endWeek) {
      week.push(
        <MonthDay
          key={week}
          onClick={(e) => this.props.dayOne(e)}
          data-date={startWeek.toISOString()}>
          <MonthDayInner>{startWeek.format('dd')[0]}</MonthDayInner>
          <CurrentDay active={moment().isSame(startWeek, 'day')}>{startWeek.date()}</CurrentDay>
        </MonthDay>,
      );

      startWeek = startWeek.clone().add(1, 'd');
    }

    return (
      <>
        <CalendarCell>
          <div />
          {week}
        </CalendarCell>
        <InnerCell>
          <PrevWeek onClick={() => this.props.prevWeek()}>
            <MdArrowBackIos />
          </PrevWeek>
          <CurrentMonth colSpan="5">{this.props.date.format('MMMM YYYY')}</CurrentMonth>
          <NextWeek onClick={() => this.props.nextWeek()}>
            <MdOutlineArrowForwardIos />
          </NextWeek>
        </InnerCell>
      </>
    );
  }
}

export default Nav;
