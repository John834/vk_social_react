import React from 'react';
import { compose } from 'redux'
import Profile from './Profile'
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { getUserProfile } from '../../Redux/profile-reducer.js';
import { withAuthRedirect } from '../../hoc/withAuthRedirect.js';

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId =this.props.match.params.userId
		if(!userId) {
			userId = 2
		}
		this.props.getUserProfile(userId)
	}

	render() {

		return (
	    	<Profile {...this.props} profile={this.props.profile} />
  		)
	}
}


let mapStateToProps = (state) => {
	return {
		profile: state.profile.profile,
	}
}




			// compose

/*   

let withUrlDataContainerComponent = withRouter(authRedirectComponent)

export default connect(mapStateToProps, {getUserProfile})(withUrlDataContainerComponent);

*/

//<PostContent contData={props.store.postsData} />
/*
contenteditable="true" */

export default compose(
	connect(mapStateToProps, {getUserProfile}),
	withRouter,
	withAuthRedirect
)(ProfileContainer)