import React from 'react';
import style from './Friends.module.css';
import { NavLink } from 'react-router-dom';

const Friends = (props) => {
  let countPage = Math.ceil(props.totalUsers / props.pageSize);
  let pages = []
  for (let i = 1; i <= countPage; i++) {
    pages.push(i);
  }
  return < div >
    {pages.map((el) => <span onClick={() => props.getUsers(el)} className={props.currentPage === el ? style.current : ''}>{el}</span>)}
    {props.users.map((el) => {
      return <div className={style.user}>
        <div >
          <NavLink to={`/Profile/${el.id}`}>
            <img className={style.avatar} src={el.avatar ? el.avatar : "https://c7.hotpng.com/preview/136/22/549/user-profile-computer-icons-girl-customer-avatar.jpg"} alt="" />
          </NavLink>
        </div>
        <div>{el.name}</div>

        <div>{el.id}</div>
        <div>{el.followed ? <button disabled={props.disabled.some(id => id === el.id)} onClick={() => props.unFollow(el.id)}>Unfollow</button> : <button disabled={props.disabled.some(id => id === el.id)} onClick={() => props.follow(el.id)}>Follow</button>}</div>

      </div>
    })}
  </div >
}

export default Friends;
