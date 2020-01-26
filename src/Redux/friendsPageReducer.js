import { UsersAPI } from "./../api/api";

let initialState = {
  // users: [{ id: 1, followed: false, name: 'Ilya', country: 'Belarus' }, { id: 2, followed: true, name: 'Vanya', country: 'Belarus' }, { id: 3, followed: true, name: 'Roma', country: 'Belarus' }],
  users: [],
  totalUsers: 13,
  pageSize: 4,
  currentPage: 1,
  isFetching: true,
  isDisabled: [],
}
export const friendsPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FOLLOW':
      return {
        ...state,
        users: state.users.map((el) => {
          if (action.id == el.id) {
            return el = { ...el, followed: true }
          }
          return el;
        })
      }
    case 'UNFOLLOW':
      return {
        ...state,
        users: state.users.map((el) => {
          if (action.id == el.id) {
            return el = { ...el, followed: false }
          }
          return el;
        })
      }
    case 'SET_USERS':
      return {
        ...state,
        users: [...action.users]
      }
    case 'SET_PAGE':
      return {
        ...state,
        currentPage: action.page,
      }
    case 'IS_FETCHING':
      return {
        ...state,
        isFetching: action.isFetching,
      }
    case 'IS_DISABLED':
      return {
        ...state,
        isDisabled: action.isFetching ? [...state.isDisabled, action.id] : state.isDisabled.filter((id) => id !== action.id),
      }
    default: return state;
  }
}

export let FOLLOW_AC = (id) => ({ type: 'FOLLOW', id });
export let UNFOLLOW_AC = (id) => ({ type: 'UNFOLLOW', id });
export let SET_USERS = (users) => ({ type: 'SET_USERS', users });
export let SET_PAGE = (page) => ({ type: 'SET_PAGE', page });
export let IS_FETCHING = (isFetching) => ({ type: 'IS_FETCHING', isFetching });
export let IS_DISABLED = (isFetching, id) => ({ type: 'IS_DISABLED', isFetching, id });

export const getUsersThunk = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(IS_FETCHING(true))
    UsersAPI.getUsers(currentPage, pageSize)
      .then(resoult => {
        dispatch(SET_USERS(resoult))
        dispatch(IS_FETCHING(false))
      })
  }
}

export const getPageThunk = (pageSize, el) => {
  return (dispatch) => {
    dispatch(IS_FETCHING(true))
    dispatch(SET_PAGE(el))
    UsersAPI.getUsers(el, pageSize)
      .then(resoult => {
        dispatch(SET_USERS(resoult))
        dispatch(IS_FETCHING(false))
      })
  }
}

export const unFollowThunk = (id) => {
  return (dispatch) => {
    dispatch(IS_DISABLED(true, id))
    UsersAPI.following(id).then(resoult => {
      dispatch(UNFOLLOW_AC(resoult));
      dispatch(IS_DISABLED(false, id));
    })
  }
}
export const followThunk = (id) => {
  return (dispatch) => {
    dispatch(IS_DISABLED(true, id))
    UsersAPI.following(id).then(resoult => {
      dispatch(FOLLOW_AC(resoult));
      dispatch(IS_DISABLED(false, id));
    })
  }
}


