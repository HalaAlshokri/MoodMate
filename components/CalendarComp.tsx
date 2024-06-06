import React, {useState} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import { StyleSheet } from 'react-native';

LocaleConfig.locales[LocaleConfig.defaultLocale].dayNamesShort = ['S','M','T','W','T','F','S'];

const App = () => {
  const [selected, setSelected] = useState('');

  return (
    <Calendar style={style.calTheme} 
    theme={{
        calendarBackground: "#F9F9FB",
        selectedDayBackgroundColor:"#4C9FC1",
        selectedDayTextColor:'white',
        todayTextColor: "#4C9FC1",
        textSectionTitleColor: 'black', }}
      onDayPress={day => {
        setSelected(day.dateString);
      }}
      markedDates={{
        [selected]: {selected: true, disableTouchEvent: true}
      }}
    />
  );
};

const style=StyleSheet.create({
    calTheme:{
    //borderWidth: 1,
    //borderColor: 'gray',
    height: 'auto',
    backgroundColor: "#F9F9FB",
    },

});

export default App;