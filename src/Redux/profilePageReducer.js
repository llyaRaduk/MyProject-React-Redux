import { UsersAPI } from "./../api/api";

let initialState = {
  posts: [{ message: 'Hey bro', like: 21 }, { message: 'How are you doing?', like: 48 }, { message: 'I am ok', like: 11 }, { message: 'Its wonderful!!', like: 100 }],
  currentText: 'qwe',
  profile: {},
}
export const profilePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE-POST': {
      let stateCopy = { ...state };
      stateCopy.currentText = action.value;
      return stateCopy;
    }
    case 'ADD-POST': {
      let stateCopy = {
        ...state,
        posts: [...state.posts],
      };
      let newPost = {
        message: state.currentText,
        like: 0,
      }
      stateCopy.posts.push(newPost)
      stateCopy.currentText = '';
      return stateCopy;
    }
    case 'SET_PROFILE': {
      return { ...state, profile: action.profile }
    }
    default: return state;
  }
}

export let UPDATE_POST_AC = (value) => ({ type: 'UPDATE-POST', value });
export let ADD_POST_AC = () => ({ type: 'ADD-POST' });
export let SET_PROFILE = (profile) => ({ type: 'SET_PROFILE', profile })

export const setProfileThunk = (userID) => (dispatch) => {
  UsersAPI.getProfile(userID).then(resoult => {
    dispatch(SET_PROFILE(resoult))
  })
}
