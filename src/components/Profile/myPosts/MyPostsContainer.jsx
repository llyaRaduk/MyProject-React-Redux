import React from 'react';
import MyPosts from './MyPosts'
import { UPDATE_POST_AC, ADD_POST_AC } from './../../../Redux/profilePageReducer';
import { connect } from 'react-redux';

// const MyPostsContainer = (props) => {

//   let state = props.store.getState().profilePage;
//   const getSMS = () => {
//     props.store.dispatch(ADD_POST_AC());
//     props.store.dispatch(UPDATE_POST_AC(''));
//   }
//   const update = (text) => {
//     props.store.dispatch(UPDATE_POST_AC(text));
//   }
//   return (
//     <MyPosts getSMS={getSMS} update={update} state={state} />
//   )
// }
// export default MyPostsContainer;

const mapStateToProps = (state) => {
  return {
    currentText: state.profilePage.currentText,
    posts: state.profilePage.posts,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {

    getSMS: () => {
      {
        dispatch(ADD_POST_AC());
      }
    },
    update: (text) => {
      {
        dispatch(UPDATE_POST_AC(text));
      }
    }
  }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
    