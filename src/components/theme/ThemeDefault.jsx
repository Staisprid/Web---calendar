import styled from 'styled-components';

export const themeDefault = {
  body_bg: '#ccc',
  calendar_bg: '#f0ffff',
  calendar_border: '#cccccc',
  calendar_time: '#a6a6a6',
  active_time: '#b8bbff',
  selected_time: '#ff77ab',
};

export const CalendarCell = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  min-height: 50px;
  @media (max-width: 550px) {
    min-height: 38px;
  }
`;

export const InnerCell = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  margin-left: 100px;
  margin-bottom: 20px;
`;
