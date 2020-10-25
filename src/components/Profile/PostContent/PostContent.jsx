import React from 'react';
import pc from './PostContent.module.css';


const PostsCount = (props) => {
	return (
		<div className={pc.postitem}>
			<div className={pc.postuser}>{props.name} {props.surname}</div>
			<div className={pc.postinfo}>{props.info}</div>
			<div className={pc.likewrap}>
				<div className={pc.likecount}>
					like: {props.like}
				</div>
			</div>
		</div>
	)
}

const PostContent = (props) => {
	
	let postItems = props.contData.postsData.map((post,index) => <PostsCount name={post.name} surname={post.surname} info={post.info} like={post.like} key={`${post}_${index}`} />)
	return (
		<div className={pc.content}>
			{ postItems }
		</div>
	)
}

export default PostContent;