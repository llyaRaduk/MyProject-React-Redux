import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { setProfileThunk } from './../../Redux/profilePageReducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class ProfileContainerAPI extends React.Component {

  componentDidMount() {
    this.props.setProfileThunk(this.props.match.params.userID);
  }

  render() {

    return <Profile profile={this.props.profile} />
  }
}
const mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})
const mapDispatchToProps = (dispatch) => ({
  setProfileThunk: (id) => {
    dispatch(setProfileThunk(id))
  }
})


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(ProfileContainerAPI) ;


