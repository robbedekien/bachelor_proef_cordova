import {
  FETCH_MUSIC_START,
  FETCH_MUSIC_SUCCESS,
  FETCH_MUSIC_FAIL,
  ADD_SONG_START,
  ADD_SONG_FAIL,
  ADD_SONG_SUCCESS,
  DELETE_SONG_START,
  DELETE_SONG_SUCCESS,
  DELETE_SONG_FAIL,
} from "../actions/music.actions";
import actionStatus from "../actionStatus";

const initialState = {
  musicStatus: actionStatus.NOT_RUNNING,
  musicAddStatus: actionStatus.NOT_RUNNING,
  musicDeleteStatus: actionStatus.NOT_RUNNING,
  music: null,
  musicError: "",
  songAddError: "",
  songDeleteError: "",
};

const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

const addMusicStart = (state, action) => {
  return updateObject(state, {
    musicStatus: actionStatus.RUNNING,
  });
};
const addMusicSuccess = (state, action) => {
  let music;
  action.music.forEach((song) => {
    music = {
      ...music,
      [song.id]: song,
    };
  });
  return updateObject(state, {
    musicStatus: actionStatus.SUCCESS,
    music,
  });
};
const addMusicFail = (state, action) => {
  return updateObject(state, {
    musicStatus: actionStatus.ERROR,
    musicError: action.error,
  });
};

const addSongStart = (state, action) => {
  return updateObject(state, {
    musicAddStatus: actionStatus.RUNNING,
  });
};
const addSongSuccess = (state, action) => {
  let song = action.song;
  let music = {
    ...state.music,
    [song.id]: song,
  };
  return updateObject(state, {
    musicAddStatus: actionStatus.SUCCESS,
    music,
  });
};
const addSongFail = (state, action) => {
  return updateObject(state, {
    musicAddStatus: actionStatus.ERROR,
    musicAddError: action.error,
  });
};

const deleteSongStart = (state, action) => {
  return updateObject(state, {
    musicDeleteStatus: actionStatus.RUNNING,
  });
};
const deleteSongSuccess = (state, action) => {
  let music = {
    ...state.music,
  };
  delete music[action.songId];
  return updateObject(state, {
    musicDeleteStatus: actionStatus.SUCCESS,
    music,
  });
};
const deleteSongFail = (state, action) => {
  return updateObject(state, {
    musicDeleteStatus: actionStatus.ERROR,
    musicDeleteError: action.error,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MUSIC_START:
      return addMusicStart(state, action);
    case FETCH_MUSIC_SUCCESS:
      return addMusicSuccess(state, action);
    case FETCH_MUSIC_FAIL:
      return addMusicFail(state, action);
    case ADD_SONG_START:
      return addSongStart(state, action);
    case ADD_SONG_SUCCESS:
      return addSongSuccess(state, action);
    case ADD_SONG_FAIL:
      return addSongFail(state, action);
    case DELETE_SONG_START:
      return deleteSongStart(state, action);
    case DELETE_SONG_SUCCESS:
      return deleteSongSuccess(state, action);
    case DELETE_SONG_FAIL:
      return deleteSongFail(state, action);
    default:
      return state;
  }
};

export default reducer;
