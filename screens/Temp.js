import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  DrawerLayoutAndroid,
  Dimensions,
  Animated,
  Image,
  FlatList,
  ScrollView,
  AppRegistry,
} from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';

const { width, height } = Dimensions.get('window');

const Parent = () => {
  const parentFunction = (text) => {
    console.log(text);
  };

  return <Child parentFunction={parentFunction}></Child>;
};

const Child = (props) => {
  const childText = 'childText';

  const childFunction = () => {
    props.parentFunction(childText);
  };

  return (
    <View>
      <Button onPress={childFunction} title="Data" />
    </View>
  );
};

function Temp() {
  return (
    <>
      <Parent />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: 40,
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  pictures: {
    width: width,
    flexDirection: 'row',
    height: height,
  },
});

export default React.memo(Temp);
