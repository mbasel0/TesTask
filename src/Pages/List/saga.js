  
import { put, takeLatest } from "redux-saga/effects";
import { POST_DATA } from "./constants";

import {
  loadError,
  loadSuccess,
  loading,
} from "../../Components/Spinner/actions";
//import request from "../../utils/request";
import ApiStore from "../../utils/request";


export function* postDataSaga(action) {
  try {
    yield put(loading());
    yield ApiStore.users.post("/", action.values);
    yield put(loadSuccess());
  } catch (error) {
    yield put(loadError());
  }
}   

export default function* ListSaga() {

  yield takeLatest(POST_DATA, postDataSaga);
}