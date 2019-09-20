import { UPDATE_KEY } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case UPDATE_KEY: {
      return action.payload;
    }
    default:
      return state;
  }
}
