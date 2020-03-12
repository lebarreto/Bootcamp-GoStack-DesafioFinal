import produce from 'immer';

const initialState = {
  description: null,
};

export default function auth(state = initialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@problem/ADD_PROBLEM_SUCCESS': {
        draft.description = action.payload.description;
        break;
      }
      default:
        return state;
    }
  });
}
