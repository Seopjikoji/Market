import axios from 'axios';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import KakaoLogins, { KAKAO_AUTH_TYPES } from '@react-native-seoul/kakao-login';
import {
  GOOGLE_LOGIN_ERROR,
  GOOGLE_LOGIN_REQUEST,
  GOOGLE_LOGIN_SUCCESS,
  KAKAO_LOGIN_ERROR,
  KAKAO_LOGIN_REQUEST,
  KAKAO_LOGIN_SUCCESS,
} from '../reducer/user';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-community/google-signin';

function kakaoLoginAPI() {
  return axios.get(
    `/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`,
  );
}

function* kakaoLogin() {
  try {
    const result = yield call(
      kakaoLoginAPI,
      KakaoLogins.login([KAKAO_AUTH_TYPES.Talk, KAKAO_AUTH_TYPES.Account]),
    );
    console.log(result);
    yield put({
      type: KAKAO_LOGIN_SUCCESS,
      token: result.accessToken,
      data: { platform: `kakao`, result },
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: KAKAO_LOGIN_ERROR,
      error: { code: e.code, msg: e.message },
    });
  }
}

function* watchKaKaoLogin() {
  yield takeLatest(KAKAO_LOGIN_REQUEST, kakaoLogin);
}

function googleLoginAPI() {
  return axios.get(`https://accounts.google.com/o/oauth2/v2/auth`);
}

function* googleLogin() {
  try {
    GoogleSignin.configure();
    const signIn = async () => {
      try {
        // await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        if (userInfo) return userInfo;
      } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          // user cancelled the login flow
        } else if (error.code === statusCodes.IN_PROGRESS) {
          // operation (e.g. sign in) is in progress already
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          // play services not available or outdated
        } else {
          // some other error happened
        }
      }
    };

    const result = signIn();
    console.log(`result`, result);
    yield put({
      type: GOOGLE_LOGIN_SUCCESS,
      token: result,
      data: { platform: `google`, result },
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: GOOGLE_LOGIN_ERROR,
      error,
    });
  }
}

function* watchGoogleLogin() {
  yield takeLatest(GOOGLE_LOGIN_REQUEST, googleLogin);
}

export default function* userSaga() {
  yield all([fork(watchKaKaoLogin), fork(watchGoogleLogin)]);
}
