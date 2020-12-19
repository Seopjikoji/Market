import axios from 'axios';
import { all, call, fork, put } from 'redux-saga/effects';

function loginAPI() {
  return axios.get(`user`);
}

function* loginRequest() {
  try {
    const result = call(loginAPI);
  } catch (e) {
    console.error(e);
    yield put({
      type: '',
    });
  }
}

export default function* userSaga() {
  yield all([fork(loginRequest)]);
}
