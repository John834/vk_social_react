import React from 'react';
import myp from './MyPost.module.css';
import { addPostActionCreator, updateNewPostText} from './../../../Redux/state';





const MyPost = (props) => {
  let newPostsElement = React.createRef()
  let addPost = () => {
    props.dispatch(addPostActionCreator())
    
  }
  let onPostChange = () => {
    let text = newPostsElement.current.value;
    console.log(props.dispatch(updateNewPostText(text)))
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