import { takeEvery, all } from "redux-saga/effects";
import { FETCH_MUSIC, ADD_SONG, DELETE_SONG } from "../actions/music.actions";
import { fetchMusicSaga, addSongSaga, deleteSongSaga } from "./music.saga";

export function* watchMusic() {
  yield all([
    takeEvery(FETCH_MUSIC, fetchMusicSaga),
    takeEvery(ADD_SONG, addSongSaga),
    takeEvery(DELETE_SONG, deleteSongSaga),
  ]);
}
