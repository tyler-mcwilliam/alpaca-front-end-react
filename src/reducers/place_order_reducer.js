import { PLACE_ORDER } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case PLACE_ORDER: {
      return action.payload;
    }
    default:
      return state;
  }
}
