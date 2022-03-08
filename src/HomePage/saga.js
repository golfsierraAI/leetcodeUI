import { takeLatest, all, fork, put, call } from "redux-saga/effects";
import { tableDataLoadFail, tableDataLoadSuccess } from "./action";
import { dataLoader } from "./apis";
function* tableDataLoadWorker() {
  try {
    const data = yield call(dataLoader);
    if (data) {
      yield put(tableDataLoadSuccess(data));
    }
  } catch (error) {
    yield put(tableDataLoadFail());
  }
}
function* tableDataLoadWatcher() {
  yield takeLatest("LOAD_DATA", tableDataLoadWorker);
}
export default function* homePageSaga() {
  yield all([tableDataLoadWatcher].map(fork));
}
