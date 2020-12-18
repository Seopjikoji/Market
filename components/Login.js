import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableNativeFeedback,
} from 'react-native';

function Login() {
  return (
    <View style={styles.container}>
      <View>
        <Text>회원이라면 누구나 무료배송!</Text>
        <Text>별도의 회원가입 없이 소셜 로그인으로 혜택!</Text>
      </View>
      <View style={styles.login}>
        <TouchableNativeFeedback onPress={() => {}}>
          <View style={styles.button}>
            <Text style={styles.text}>로그인</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  login: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  button: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.25)',
    borderStyle: 'solid',
    paddingHorizontal: 5,
    paddingVertical: 4,
    height: 40,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'rgba(0, 0, 0, 0.25)',
  },
});

export default Login;
