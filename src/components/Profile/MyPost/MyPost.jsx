import React from 'react';
import myp from './MyPost.module.css';
// import { addPostActionCreator, updateNewPostText} from './../../../Redux/profile-reducer';
import { Field, reduxForm } from 'redux-form';



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
 // let postItems = props.postsData.map((post,index) => <PostsCount name={post.name} surname={post.surname} info={post.info} like={post.like} key={`${post}_${index}`} />)
    let postItems = props.postsData
      .map((post,index) => 
        <PostsCount 
          name={post.name} 
          surname={post.surname} 
          info={post.info} 
          like={post.like} 
          key={`${post}_${index}`} 
        />)

  /*let newPostsElement = React.createRef()
  let onAddPost = () => {
    props.addPost()
    // props.dispatch(addPostActionCreator())
    
  }
  let onPostChange = () => {
    let text = newPostsElement.current.value;
    props.updateNewPostText(text)

  }*/

  //redux form 


  const onSonAddPostubmit = (values) => {
    props.addPost(values.addNewPost)  
  }


  return (
    <div className={myp.container}>
      <div className={myp.post}>
        <img src="http://placehold.it/28x28" alt=""/>
        <div className={myp.submit}>


          <MyPostReduxForm onSubmit={onSonAddPostubmit} />

        </div>
      </div>
      <div className={myp.content}>
        { postItems }
      </div>
    </div>
  )
}

const ProfileForm = (props) => {
  const {handleSubmit} = props
  return (
       <form onSubmit={handleSubmit} >
          <Field 
            name="addNewPost"
            component="input"
            type="text" 
            placeholder="What's new?" 
            // onChange={ onPostChange } 
            // ref={newPostsElement} 
            // value={props.postMess} 
          />
          <button /* onClick={ onAddPost } */ className={myp.btn}>Post</button>
        </form>
  )
}


const MyPostReduxForm = reduxForm({
  // a unique name for the form
  form: 'post'
})(ProfileForm)






export default MyPost;