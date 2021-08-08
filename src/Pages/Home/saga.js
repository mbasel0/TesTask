import { put, takeLatest } from "redux-saga/effects";
import { search } from "./actions.js";
import { SEARCH } from "./constants";

import {
    loadError,
    loadSuccess,
    loading,
} from "../../Components/Spinner/actions";

import { data } from "../../data.js";


export function* searchSaga(action) {
    try {
        document.getElementById('src');
    } catch (error) {
        yield put(loadError());
    }
}

export default function* homeSaga() {
    yield takeLatest(SEARCH, searchSaga);
}