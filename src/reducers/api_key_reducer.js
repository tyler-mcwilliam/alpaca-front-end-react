import { FETCH_POSITIONS } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_POSITIONS: {
      return action.payload.messages;
    }
    default:
      return state;
  }
}
