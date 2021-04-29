export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
 /*  token:
    "BQDVD7_QNPrhHc_-FDHzd7DHf3Uisn-__lR4Xfus8H7z3F7RIA-ax7ddGd-MX13NOA8rISUHrKEuGDxgSe9ZxNddScpY3WM8yLDH_cs5nvSS7jJdp6LYE-VAtyBaYLKAXTmZvFzMrUq8yhQYgt9MR9iC5Y6IHYPMMWwaXAJE-dVoPWOAkTGb",
 */};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      console.log("in SET_USER");
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      console.log("in SET_Token");
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      console.log("in SET_Playlist");
      return {
        ...state,
        playlists: action.playlists,
      };
      case "MY_FAV":
        console.log("in My_fav");
          return{
              ...state,
              my_fav:action.my_fav,
          }
    default:
      return state;
  }
};

export default reducer;
