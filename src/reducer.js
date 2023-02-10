export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  //remover o token quando terminar e deixar null
  token: 'BQAoPqmED0-3MB-NlYS8SbdcjZULESorTuM3vKlo3NuHm-IyJ_osLFYtX3FmevWd599_1G0bnpo176Dlv_yuJTAEss7mHgjHG7XiqiZJG5IjaupEOOOV0Mqigd8mrqNxWQA8W4Pp6WpaqikDZPwFlXXR5XaAVF8_aHQ1PTMl0Mtr2DRAMOBfhW_XzjPHHz3UoBc',
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;