import produce from 'immer';

const initialState = {
  token: null,
  signed: false,
};

export default function auth(state = initialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.signed = true;
        break;
      }
      case '@auth/SIGN_FAILURE': {
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.signed = false;
        break;
      }
      default:
        return state;
    }
  });
}
