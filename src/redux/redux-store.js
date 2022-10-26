import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {profileReducer} from "./profileReducer";
import {dialogReducer} from "./dialogReducer";
import {sidebarReducer} from "./sidebarReducer";
import {findUserReducer} from "./findUsersReducer";
import {authReducer} from "./authReducer";
import {appReducer} from "./appReducer";

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogReducer,
  sidebar: sidebarReducer,
  findUsersPage: findUserReducer,
  auth: authReducer,
  app: appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;