import React from 'react';
import style from './Friends.module.css';
import Friends from './Friends';
import Prelouder from './../common/Prelouder'
class FriendsAPI extends React.Component {


  componentDidMount() {
    this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
  };
  getUsers = (el) => {
    this.props.getPageThunk(this.props.pageSize, el)
  }
  render() {
    return <div>
      {this.props.isFetching ? <Prelouder /> : null}
      <Friends totalUsers={this.props.totalUsers} pageSize={this.props.pageSize}
        getUsers={this.getUsers} currentPage={this.props.currentPage} users={this.props.users}
        unFollow={this.props.unFollowThunk} follow={this.props.followThunk} disabled={this.props.isDisabled} />
    </div>
  }
}

export default FriendsAPI;
