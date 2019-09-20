import { FETCH_ACCOUNT } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_ACCOUNT: {
      return action.payload;
    }
    default:
      return state;
  }
}
