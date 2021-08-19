import rootReducer  from "./reducers/index";
import { createStore ,applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
//import { createHistory } from 'history';
//import { createBrowserHistory } from 'history';
//import { syncHistoryWithStore } from 'react-router-redux';
//import createHistory from'history/createBrowserHistory';

//const browserHistory = createBrowserHistory();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [thunk];
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

// const history = syncHistoryWithStore(
//     store,
//     createSelectLocationState()
//   );
// history.listen(location => analyticsService.track(location.pathname))

export default store;