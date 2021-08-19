import { LOCATION_CHANGE } from 'react-router-redux'; 
const initialState = { locationBeforeTransitions: null };

function routing(state = initialState, action) { 
  if (action.type === LOCATION_CHANGE) {
    return { ...state, locationBeforeTransitions: action.payload }
  } 
  if (action.type === 'SET_OPERATION' || 'SEARCH_TEXT') {
    const { name } = action;
    let location = state.locationBeforeTransitions;
    const pathname = `/redux-history-demo/${name}`;
    location = { ...location, pathname, action: 'PUSH' };
    return { ...state, locationBeforeTransitions: location };
  }
  return state;
}
export default routing;