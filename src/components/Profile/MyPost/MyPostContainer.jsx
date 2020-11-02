import React from 'react';
import { addPostActionCreator, updateNewPostText} from './../../../Redux/profile-reducer';
import MyPost from './MyPost';

import { connect } from 'react-redux';


/* const MyPostContainer = (props) => {
  let state = props.store.getState().profile
  let addPost = () => {
    props.store.dispatch(addPostActionCreator())
    
  }
  let onPostChange = (text) => {
    //let text = newPostsElement.current.value;
    let action = updateNewPostText(text)
    props.store.dispatch(action)
    
  }
  return (
    <MyPost addPost={addPost} 
    updateNewPostText={onPostChange} 
    newPostText={state.newPostText}
  />)
}

export default MyPostContainer;

*/

//dispatch={props.dispatch} newPostText={props.data.newPostText}


// connect

let mapStateToPropsPost = (state) => {
  return {
    postMess: state.profile.newPostText,
    postsData: state.profile.postsData
  }
}

let mapDispatchToPropsPost = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator())
    },
    updateNewPostText: (text) => {
      dispatch(updateNewPostText(text))
    }
  }
}


const MyPostContainer = connect(mapStateToPropsPost, mapDispatchToPropsPost)(MyPost)

export default MyPostContainer

