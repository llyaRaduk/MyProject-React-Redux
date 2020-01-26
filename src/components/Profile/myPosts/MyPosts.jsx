import React from 'react';
import Post from './post/Post';

const MyPosts = (props) => {
  let PostElements = props.posts.map((el) => {
    return <Post message={el.message} like={el.like} />
  })

  const getSMS = () => {
    props.getSMS();
  }
  const update = (e) => {
    props.update(e.target.value);
  }
  return (
    <div >
      <textarea onChange={update} value={props.currentText}></textarea>
      <button onClick={getSMS}>Send</button>
      {PostElements}
    </div>
  )
}
export default MyPosts;
