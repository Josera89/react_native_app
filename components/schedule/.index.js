// import React from 'react';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Button } from 'native-base';

import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

import { DrawerNavigator } from 'react-navigation'; // 1.0.0-beta.14


export default class AgendaScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {}
    };
  }

  render() {
    return (
      <Agenda
      items={
        {'2012-05-22': [{text: 'item 1 - any js object'}],
         '2012-05-23': [{text: 'item 2 - any js object'}],
         '2012-05-24': [],
         '2012-05-25': [{text: 'item 3 - any js object'},{text: 'any js object'}],
        }}
      loadItemsForMonth={(month) => {console.log('trigger items loading')}}
      onCalendarToggled={(calendarOpened) => {console.log(calendarOpened)}}
      onDayPress={(day)=>{console.log('day pressed')}}
      onDayChange={(day)=>{console.log('day changed')}}
      selected={'2012-05-16'}
      minDate={'2012-05-10'}
      maxDate={'2012-05-30'}
      pastScrollRange={50}
      futureScrollRange={50}
      renderItem={(item, firstItemInDay) => {return (<View />);}}
      renderDay={(day, item) => {return (<View />);}}
      renderEmptyDate={() => {return (<View />);}}
      renderKnob={() => {return (<View />);}}
      renderEmptyData = {() => {return (<View />);}}
      rowHasChanged={(r1, r2) => {return r1.text !== r2.text}}
      hideKnob={true}
      markedDates={{
        '2012-05-16': {selected: true, marked: true},
        '2012-05-17': {marked: true},
        '2012-05-18': {disabled: true}
      }}
      style={{}}
    />
    );
  }
}
