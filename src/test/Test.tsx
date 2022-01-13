import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

// const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(47, 52, 55)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function Test() {
  return (
    <View style={styles.container}>
      <Text>hellosee</Text>
    </View>
  );
}
