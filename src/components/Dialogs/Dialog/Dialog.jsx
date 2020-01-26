import React from 'react';
import style from './Dialog.module.css';
import { NavLink } from 'react-router-dom';
const Dialog = (props) => {
  return (
      <div className={style.Dialog}>
        <NavLink activeClassName={style.active} to={`/Dialogs/${props.id}`}>{props.name}</NavLink>
      </div>
  )
}
export default Dialog;
