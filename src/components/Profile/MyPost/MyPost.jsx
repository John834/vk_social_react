import React from 'react';
import myp from './MyPost.module.css';

const MyPost = (props) => {
  let newPostsElement = React.createRef()
  let addPost = () => {
    props.addPost()
    
  }
  let onPostChange = () => {
    let text = newPostsElement.current.value;
    console.log(props.updatePost(text))
  }
  return (
    <div className={myp.post}>
      <img src="http://placehold.it/28x28" alt=""/>
      <div className={myp.submit}>
        <input onChange={ onPostChange } ref={newPostsElement} value={props.newPostText} placeholder="What's new?" />
        <button onClick={ addPost } className={myp.btn}>Post</button>
      </div>
    </div>
  )
}

export default MyPost;