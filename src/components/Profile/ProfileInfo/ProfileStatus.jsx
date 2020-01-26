import React from 'react';
import style from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  }
  activateMode =()=>{
    this.setState({
      editMode: true
    })
  }
  deActivateMode =()=>{
    this.setState({
      editMode: false
    })
  }
  render() {
    return (
      <div>
        {
  !this.state.editMode && <span onDoubleClick={this.activateMode}>{this.props.status}</span>
        }
        {
          this.state.editMode &&
          <div>
            <input autoFocus={true} onBlur={this.deActivateMode} value={this.props.status}/>
          </div>
        }
      </div>
    )
  }
}



export default ProfileStatus;
