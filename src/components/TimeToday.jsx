import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import { CalendarCell } from './theme/ThemeDefault';

const CellEvent = styled(CalendarCell)`
  border: 1px solid ${(props) => props.theme.calendar_border};
  ${({ selected }) =>
    selected &&
    `
    background-color:#a287ff ;
  `}
`;

const CellActive = styled(CellEvent)`
  background-color: #a287ff;
  cursor: pointer;
  ${({ selected }) =>
    selected &&
    `
  `}
`;

class TimeToday extends React.Component {
  render() {
    const time_day = moment(this.props.date).subtract(1, 'hours');
    const all_day = moment(this.props.date).subtract(1, 'hours').subtract(1, 'seconds');
    const finish_day = this.props.date;

    for (let now_time of this.props.event_date) {
      if (moment(now_time).isBetween(all_day, finish_day)) {
        return (
          <CellActive
            data-active={true}
            onClick={(e) => this.props.selectEvent(e)}
            data-select={moment(time_day).toISOString(true)}
            selected={moment(this.props.selected_date).isSame(time_day)}
          />
        );
      }
    }

    return (
      <CellEvent
        data-active={false}
        onClick={(e) => this.props.selectEvent(e)}
        data-select={moment(time_day).toISOString(true)}
        selected={moment(this.props.selected_date).isSame(time_day)}></CellEvent>
    );
  }
}

export default TimeToday;
