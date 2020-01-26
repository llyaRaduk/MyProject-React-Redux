import React from 'react';
import style from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
  return (
    <div className={style.ProfileInfo}>
      <img className={style.avatar} src={props.profile.avatar ? props.profile.avatar : "https://c7.hotpng.com/preview/136/22/549/user-profile-computer-icons-girl-customer-avatar.jpg"} />
      <ProfileStatus status={'Hello my fr'}/>
      <div>Description</div>
    </div>
  )
}



export default ProfileInfo;
