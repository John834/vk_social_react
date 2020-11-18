import React, { Component } from 'react';

import us from './UserInfo.module.css';

class ProfileStatus extends Component {
  state = {
    editMode: false
  }

  activatedEditMode = () => {
    this.setState({
      editMode: true
    })
  }

  deactivatedEditMode = () => {
    this.setState( {
      editMode:false
    })
  }

  render() {
    return (
      <div className={us.status}>

          {!this.state.editMode &&
            <div className={us.profile__status}><span onDoubleClick={this.activatedEditMode}>
              {this.props.status}
            </span></div>
          }


          {this.state.editMode &&
            <div className={us.inputStatus}>
              <input autoFocus={true} onBlur={this.deactivatedEditMode} placeholder={this.props.status} />
            </div>
          }

      </div>
    )
  }
}

export default ProfileStatus;
