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
          {'2018-01-12': [{text: 'item 1 - any js object'}],
           '2018-01-13': [{text: 'item 2 - any js object'}],
           '2018-01-14': [],
           '2018-01-15': [{text: 'item 3 - any js object'},{text: 'any js object'}],
          }}
        loadItemsForMonth={(month) => {console.log('trigger items loading')}}
        selected={new Date()}
        renderItem={this.renderItem.bind(this)}
        renderEmptyDate={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}

        onCalendarToggled={(calendarOpened) => {console.log(calendarOpened)}}
        onDayPress={(day)=>{console.log('day pressed')}}
        renderKnob={() => {return (<View />);}}

      />
    );
  }

  loadItems(day) {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          const numItems = Math.floor(Math.random() * 5);
          for (let j = 0; j < numItems; j++) {
            this.state.items[strTime].push({
              name: 'Item for ' + strTime,
              height: Math.max(50, Math.floor(Math.random() * 150))
            });
          }
        }
      }
      console.log(this.state.items);
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
      this.setState({
        items: newItems
      });
    }, 1000);
    console.log(`Load Items for ${day.year}-${day.month}`);
  }

  renderItem(item) {
    return (
      <View style={[styles.item, {height: item.height}]}>
        <Button rounded danger>
          <Text style={styles.text}>Cancelar Fecha</Text>
        </Button>
      </View>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}>
        <Button rounded success>
          <Text style={styles.text}>Reservar Fecha</Text>
        </Button>
      </View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
}

const styles = StyleSheet.create({
  item: {
    // backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    // width: 1000,
    flex:1,
    paddingTop: 30
  },
  text: {
    color: 'white',
    marginRight: 20,
    marginLeft: 20
  }
});
