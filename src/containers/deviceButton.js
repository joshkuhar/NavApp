import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

function deviceButton(props) {
    return (
      <TouchableOpacity onPress={props.onPress} setOpacityTo={ {value: 3, duration: 3} }>
        <View style={styles.deviceButton}></View>
      </TouchableOpacity>
    );
  }
const styles = StyleSheet.create({
  deviceButton: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'blue',
    height: 20,
    width: 20,
    backgroundColor: 'pink',
  }
})

export { deviceButton };