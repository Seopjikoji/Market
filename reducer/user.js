import produce from 'immer';

const user = {
  account: null,
};

export const INIT_ACCOUNT = 'USER/INIT_ACCOUNT';
export const GET_ACCOUNT = 'USER/GET_ACCOUNT';

export const initAccount = () => ({
  type: INIT_ACCOUNT,
});

export const getAccount = (data) => ({
  type: GET_ACCOUNT,
  data,
});

const userReducer = (state = user, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case INIT_ACCOUNT:
        draft.account = null;
      case GET_ACCOUNT:
        draft.account = action.data;
    }
  });

export default userReducer;
