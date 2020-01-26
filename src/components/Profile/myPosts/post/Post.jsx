import React from 'react';
import style from './Post.module.css'
const Post = (props) => {
  return (
    <div>
      <div className={style.avatar}>
        <img src='https://bipbap.ru/wp-content/uploads/2017/05/VOLKI-krasivye-i-ochen-umnye-zhivotnye.jpg' />
      </div>
      <div>{props.message}</div>
      <div>like : {props.like}</div>
    </div>
  )
}
export default Post;
