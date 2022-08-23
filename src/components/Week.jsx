import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import TimeToday from './TimeToday';

import { CalendarCell } from './theme/ThemeDefault';

const start_times = 8;
const finish_time = 21;

const TimeBlock = styled(CalendarCell)`
  position: relative;
`;

const TimeInner = styled.div`
  color: ${(props) => props.theme.calendar_time};
  right: 30px;
  font-size: 18px;
  position: absolute;
  bottom: -15px;
  z-index: 5;
  @media (max-width: 650px) {
    font-size: 14px;
    right: 5px;
    bottom: -12px;
  }
`;

class Week extends React.Component {
  render() {
    const beginWeek = moment(this.props.date).startOf('isoWeek');

    const TimeHours = [];
    for (let hour_now = start_times + 1; hour_now <= finish_time; hour_now++) {
      const line_hour = [];

      line_hour.push(
        <TimeBlock key={hour_now}>
          {' '}
          <TimeInner>
            {hour_now !== start_times && hour_now !== finish_time
              ? hour_now.toString().padStart(2, '0') + ':00'
              : ''}
          </TimeInner>
        </TimeBlock>,
      );
      for (let weekDays = 0; weekDays < 7; weekDays++) {
        const date = moment(beginWeek).add(weekDays, 'days').add(hour_now, 'hours');
        const new_day = date.format('YYYY-MM-DD');

        line_hour.push(
          <TimeToday
            date={date}
            key={weekDays}
            selectEvent={this.props.selectEvent}
            selected_date={this.props.selected_date}
            event_date={new_day in this.props.event_date ? this.props.event_date[new_day] : []}
          />,
        );
      }
      TimeHours.push([line_hour]);
    }

    return (
      <>
        {TimeHours.map((line_hour, i) => (
          <CalendarCell key={i}>{line_hour}</CalendarCell>
        ))}
      </>
    );
  }
}

export default Week;
