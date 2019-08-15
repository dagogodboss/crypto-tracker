import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Header from './../../components/Header';
import Body from './../../components/Body';


export default function SettingsScreen() {  
  return (
    <View style={styles.container}>
      <Header pageName="SETTINGS"/>
      <Body>
       <Text> </Text>
      </Body>
    </View>
  );
}

SettingsScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});