import React from 'react';
import Profile from './Profile'
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from './../../Redux/profile-reducer.js'
import { withRouter } from "react-router";
import { userIdAPI } from './../api/api.js';

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId =this.props.match.params.userId
		if(!userId) {
			userId = 2
		}
		userIdAPI.getUserId(userId)
			.then(data => {
				this.props.setUserProfile(data)
		})
	}
	render() {
		return (
	    <Profile {...this.props} profile={this.props.profile} />
  	)
	}
}

let mapStateToProps = (state) => {
	return {
		profile: state.profile.profile
	}
}



let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setUserProfile })(withUrlDataContainerComponent);



//<PostContent contData={props.store.postsData} />
/*
contenteditable="true" */

