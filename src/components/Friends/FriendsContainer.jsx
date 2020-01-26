import { connect } from 'react-redux';
import FriendsAPI from './FriendsAPI';
import { getPageThunk, getUsersThunk, unFollowThunk, followThunk } from './../../Redux/friendsPageReducer'

const mapStateToProps = (state) => {
  return {
    users: state.friendsPage.users,
    totalUsers: state.friendsPage.totalUsers,
    pageSize: state.friendsPage.pageSize,
    currentPage: state.friendsPage.currentPage,
    isFetching: state.friendsPage.isFetching,
    isDisabled: state.friendsPage.isDisabled,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getPageThunk: (currentPage, pageSize) => {
      dispatch(getPageThunk(currentPage, pageSize))
    },
    getUsersThunk: (pageSize, el) => {
      dispatch(getUsersThunk(pageSize, el))
    },
    unFollowThunk: (id) => {
      dispatch(unFollowThunk(id))
    },
    followThunk: (id) => {
      dispatch(followThunk(id))
    },
  }
}
const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsAPI)
export default FriendsContainer;
