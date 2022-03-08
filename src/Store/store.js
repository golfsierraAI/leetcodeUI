import { applyMiddleware, compose, createStore } from "redux";
import homePageSaga from "../HomePage/saga";
import rootReducer from "./rootReducer";
import createSagaMiddleware from "redux-saga";

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
sagaMiddleWare.run(homePageSaga);
export default store;
