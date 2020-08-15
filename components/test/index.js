/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableOpacity, Pressable} from 'react-native';

function Test() {

  function touched() {
    console.log('touched')
  }
  return (
    <TouchableOpacity onPress = {touched}>
      <View>
        <Text>THIS IS MORE TEST FROM A CHILD COMPONENT</Text>
      </View>
    </TouchableOpacity>
  );
}

export default Test;
