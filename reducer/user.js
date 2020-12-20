import produce from 'immer';

const user = {
  account: null,
  accessToken: null,
  loginLoading: false,
  loginDone: false,
  loginError: null,
  logoutLoading: false,
  logoutDone: false,
  logoutError: null,
};

export const KAKAO_LOGIN_REQUEST = 'USER/KAKAO_LOGIN_REQUEST';
export const KAKAO_LOGIN_SUCCESS = `USER/KAKAO_LOGIN_SUCCESS`;
export const KAKAO_LOGIN_ERROR = `USER/KAKAO_LOGIN_ERROR`;

export const GOOGLE_LOGIN_REQUEST = 'USER/GOOGLE_LOGIN_REQUEST';
export const GOOGLE_LOGIN_SUCCESS = `USER/GOOGLE_LOGIN_SUCCESS`;
export const GOOGLE_LOGIN_ERROR = `USER/GOOGLE_LOGIN_ERROR`;

export const LOGOUT_REQUEST = 'USER/LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = `USER/LOGOUT_SUCCESS`;
export const LOGOUT_ERROR = `USER/LOGOUT_ERROR`;

export const kakaoRequest = () => ({
  type: KAKAO_LOGIN_REQUEST,
});

export const googleRequest = () => ({
  type: GOOGLE_LOGIN_REQUEST,
});

const userReducer = (state = user, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case (KAKAO_LOGIN_REQUEST, GOOGLE_LOGIN_REQUEST):
        draft.loginLoading = true;
        draft.loginDone = false;
        draft.loginError = null;
      case (KAKAO_LOGIN_SUCCESS, GOOGLE_LOGIN_SUCCESS):
        draft.loginLoading = false;
        draft.loginDone = true;
        console.log(action.data);
        draft.account = action.data;
        draft.accessToken = action.token;
      case (KAKAO_LOGIN_ERROR, GOOGLE_LOGIN_ERROR):
        draft.loginLoading = false;
        draft.loginError = action.error;
      case LOGOUT_REQUEST:
        draft.logoutLoading = true;
        draft.logoutDone = true;
      case LOGOUT_SUCCESS:
        draft.logoutLoading = false;
        draft.logoutDone = true;
        draft.account = null;
      case LOGOUT_ERROR:
        draft.logoutLoading = false;
        draft.logoutDone = false;
        draft.logoutError = action.error;
    }
  });

export default userReducer;
