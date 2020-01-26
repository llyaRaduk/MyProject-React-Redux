import React from 'react';
import style from './Aside.module.css';
import { NavLink } from 'react-router-dom';
const Aside = () => {
  return (
    <nav className={style.nav}>
      <ul className={style.list}>
        <li><a ClassName={style.active} href='/Profile/1'>Profile</a></li>
        <li><NavLink activeClassName={style.active} to='/Dialogs'>Messages</NavLink></li>
        <li><a href='#'>News</a></li>
        <li><NavLink activeClassName={style.active} to='/Friends'>Friends</NavLink></li>
      </ul>
    </nav>
  )
}

export default Aside;
