import React from 'react';
import myp from './MyPost.module.css';
// import { addPostActionCreator, updateNewPostText} from './../../../Redux/profile-reducer';



const PostsCount = (props) => {
  return (
    <div className={myp.postitem}>
      <div className={myp.postuser}>{props.name} {props.surname}</div>
      <div className={myp.postinfo}>{props.info}</div>
      <div className={myp.likewrap}>
        <div className={myp.likecount}>
          like: {props.like}
        </div>
      </div>
    </div>
  )
}


const MyPost = (props) => {
  let postItems = props.postsData.map((post,index) => <PostsCount name={post.name} surname={post.surname} info={post.info} like={post.like} key={`${post}_${index}`} />)
  let newPostsElement = React.createRef()
  let onAddPost = () => {
    props.addPost()
    // props.dispatch(addPostActionCreator())
    
  }
  let onPostChange = () => {
    let text = newPostsElement.current.value;
    props.updateNewPostText(text)

  }
  return (
    <div className={myp.container}>
      <div className={myp.post}>
        <img src="http://placehold.it/28x28" alt=""/>
        <div className={myp.submit}>
          <input onChange={ onPostChange } ref={newPostsElement} value={props.postMess} placeholder="What's new?" />
          <button onClick={ onAddPost } className={myp.btn}>Post</button>
        </div>
      </div>
      <div className={myp.content}>
        { postItems }
      </div>
    </div>
  )
}



export default MyPost;