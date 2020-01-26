import React from 'react';
import style from './Profile.module.css';
import MyPostsContainer from './myPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
const Profile = (props) => {
 
  return (
    <main className={style.main}>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer/>
    </main>
  )
}

export default Profile;
