import React, { useCallback, useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableNativeFeedback,
  Keyboard,
  Text,
} from 'react-native';
import IconIo from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Feather';

export function HomeHeader() {
  const [keyword, setKeyword] = useState('');
  const onChangeKeyword = useCallback((e) => {
    setKeyword(e);
  }, []);
  return (
    <>
      <View style={HomeStyles.inputContainer}>
        <View style={HomeStyles.box}>
          <IconIo name="search" size={20} color="black" />
          <TouchableNativeFeedback onPress={Keyboard.dismiss}>
            <TextInput
              placeholder="상품 또는 마켓 검색!"
              style={HomeStyles.input}
              value={keyword}
              keyboardType="web-search"
              onChangeText={onChangeKeyword}
            />
          </TouchableNativeFeedback>
        </View>
      </View>
    </>
  );
}

const HomeStyles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dee2e6',
    borderRadius: 10,
    paddingHorizontal: 5,
    marginHorizontal: 10,
  },
  box: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: '100%',
  },
});

function Header({ Component, openDrawer, title }) {
  return (
    <>
      <View style={styles.container}>
        <TouchableNativeFeedback onPress={openDrawer}>
          <View style={styles.icon}>
            <IconIo name={'menu-outline'} size={20} color="black" />
          </View>
        </TouchableNativeFeedback>
        {title ? <Text>{title}</Text> : <></>}
        {Component ? <Component /> : <></>}
        <View style={{ flexDirection: 'row' }}>
          <TouchableNativeFeedback onPress={() => console.log('bell')}>
            <View style={styles.icon}>
              <Icon name="bell" size={20} color="black" />
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => {}}>
            <View style={styles.icon}>
              <IconIo name={'cart-outline'} size={20} color="black" />
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    elevation: 4,
  },
  icon: {
    width: 30,
    height: 30,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Header;
