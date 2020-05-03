/*
 * action types
 */

export const FETCH_MUSIC = "FETCH_MUSIC";
export const FETCH_MUSIC_START = "FETCH_MUSIC_START";
export const FETCH_MUSIC_SUCCESS = "FETCH_MUSIC_SUCCESS";
export const FETCH_MUSIC_FAIL = "FETCH_MUSIC_FAIL";
export const FETCH_MUSIC_DETAILS = "FETCH_MUSIC_DETAILS";
export const ADD_SONG = "ADD_SONG";
export const ADD_SONG_START = "ADD_SONG_START";
export const ADD_SONG_SUCCESS = "ADD_SONG_SUCCESS";
export const ADD_SONG_FAIL = "ADD_SONG_FAIL";
export const DELETE_SONG = "DELETE_SONG";
export const DELETE_SONG_START = "DELETE_SONG_START";
export const DELETE_SONG_SUCCESS = "DELETE_SONG_SUCCESS";
export const DELETE_SONG_FAIL = "DELETE_SONG_FAIL";

/*
 * action creators
 */

export function fetchMusic() {
  return { type: FETCH_MUSIC };
}
export function fetchSongsStart() {
  return { type: FETCH_MUSIC_START };
}
export function fetchSongsSuccess(music) {
  return { type: FETCH_MUSIC_SUCCESS, music };
}
export function fetchSongsFail(error) {
  return { type: FETCH_MUSIC_FAIL, error };
}

export function fetchMusicDetails(musicId) {
  return { type: FETCH_MUSIC_DETAILS, musicId };
}

export function addSong(song) {
  return { type: ADD_SONG, song };
}
export function addSongStart() {
  return { type: ADD_SONG_START };
}
export function addSongSuccess(song) {
  return { type: ADD_SONG_SUCCESS, song };
}
export function addSongFail(error) {
  return { type: ADD_SONG_FAIL, error };
}

export function deleteSong(songId) {
  return { type: DELETE_SONG, songId };
}
export function deleteSongStart() {
  return { type: DELETE_SONG_START };
}
export function deleteSongSuccess(songId) {
  return { type: DELETE_SONG_SUCCESS, songId };
}
export function deleteSongFail(error) {
  return { type: DELETE_SONG_FAIL, error };
}
