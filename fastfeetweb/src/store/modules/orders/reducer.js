import produce from 'immer';

const initialState = {
  product: null,
};

export default function auth(state = initialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@order/UPDATE_SUCCESS': {
        draft.product = action.payload.product;
        break;
      }
      case '@order/DELETE_SUCCESS': {
        draft.product = action.payload.product;
        break;
      }
      case '@order/CANCEL_SUCCESS': {
        draft.product = action.payload.product;
        break;
      }
      default:
        return state;
    }
  });
}
