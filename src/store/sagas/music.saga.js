import axios from "../../axios-custom";
import { put } from "redux-saga/effects";
import * as actions from "../actions/index.actions";

export function* fetchMusicSaga(action) {
  yield put(actions.fetchSongsStart());
  try {
    const response = yield axios.get("/songs/");
    yield put(actions.fetchSongsSuccess(response.data));
  } catch (error) {
    yield put(actions.fetchSongsFail(error));
  }
}

export function* addSongSaga(action) {
  yield put(actions.addSongStart());
  try {
    const response = yield axios.post("/songs/", action.song, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    yield put(actions.addSongSuccess(response.data));
  } catch (error) {
    yield put(actions.addSongFail(error));
  }
}

export function* deleteSongSaga(action) {
  yield put(actions.deleteSongStart());
  try {
    yield axios.delete("/songs/" + action.songId);
    yield put(actions.deleteSongSuccess(action.songId));
  } catch (error) {
    yield put(actions.deleteSongFail(error));
  }
}
