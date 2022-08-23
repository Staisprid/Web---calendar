import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import moment from 'moment';
import Header from './Header';
import Nav from './Nav';
import Week from './Week';
import ButtonBlock from './ButtonBlock';
import { themeDefault } from './theme/ThemeDefault';

const CalendarWrapper = styled.div`
  background-color: ${(props) => props.theme.calendar_bg};
  position: relative;
  text-align: center;
  max-width: 740px;
  margin: auto;
`;

const CalendarNav = styled.div`
  background-color: ${(props) => props.theme.calendar_bg};
  position: fixed;
  max-width: 740px;
  top: 90px;
  width: 100%;
  z-index: 25;
`;

const CalendarBlock = styled.div`
  margin-top: 120px;
`;

const CalendarToday = styled.div`
  background-color: ${(props) => props.theme.calendar_bg};
  max-width: 740px;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 90px;
  z-index: 25;
  @media (max-width: 550px) {
    height: 60px;
  }
`;

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    const date = moment();

    this.state = {
      date,
      event_date: {},
      selected_date: null,
      selected_active: false,
    };
  }

  dayOne = (event) => {
    this.setState({
      date: moment(event.currentTarget.getAttribute('data-date')),
    });
  };

  prevWeek = () => {
    this.setState({
      date: this.state.date.subtract(1, 'weeks'),
    });
  };

  nextWeek = () => {
    this.setState({
      date: this.state.date.add(1, 'weeks'),
    });
  };

  selectEvent = (event) => {
    this.setState({
      selected_date: moment(event.currentTarget.getAttribute('data-select')),
      selected_active: event.currentTarget.getAttribute('data-active'),
    });
  };

  createEvent = () => {
    const message = window.prompt('Enter event time: YYYY-MM-DD HH:mm:ss');

    const correct_input = moment(message, 'YYYY-MM-DD HH:mm:ss', true);

    const correct_event = correct_input.format('YYYY-MM-DD');
    this.setState((prevState) => ({
      event_date: {
        ...prevState.event_date,
        [correct_event]:
          correct_event in prevState.event_date
            ? [correct_input, ...prevState.event_date[correct_event]]
            : [correct_input],
      },
    }));
  };

  todayOnClick = () => {
    this.setState({
      date: moment(),
    });
  };

  deleteEvent = () => {
    if (this.state.selected_date && this.state.selected_active) {
      const new_date = moment(this.state.selected_date).format('YYYY-MM-DD');
      const events = [];
      let correct_input_date = { ...this.state.correct_input_date };
      correct_input_date[new_date] = events;
      this.setState({
        event_date: correct_input_date,
        selected_date: null,
        selected_active: false,
      });
    }
  };

  render() {
    return (
      <ThemeProvider theme={themeDefault}>
        <CalendarWrapper>
          <Header createEvent={this.createEvent} />
          <CalendarNav>
            <Nav
              dayOne={this.dayOne}
              date={this.state.date}
              prevWeek={this.prevWeek}
              nextWeek={this.nextWeek}
            />
          </CalendarNav>

          <CalendarBlock>
            <Week
              date={this.state.date}
              selectEvent={this.selectEvent}
              event_date={this.state.event_date}
              selected_date={this.state.selected_date}
            />
          </CalendarBlock>

          <CalendarToday>
            <ButtonBlock
              deleteEvent={this.deleteEvent}
              todayOnClick={this.todayOnClick}
              deletRecord={this.state.selected_active}
            />
          </CalendarToday>
        </CalendarWrapper>
      </ThemeProvider>
    );
  }
}

export default Calendar;
