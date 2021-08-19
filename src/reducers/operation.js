import { LOCATION_CHANGE } from 'react-router-redux';

export default function operation(state = "", action) {
  if (action.type === 'SET_OPERATION') {
    return action.name;
  } 
  if (action.type === LOCATION_CHANGE) {
    const pathname = action.payload.pathname; 
    const [_, operation = ""] = pathname.split('/');
    return operation;
  }

  return state;
}