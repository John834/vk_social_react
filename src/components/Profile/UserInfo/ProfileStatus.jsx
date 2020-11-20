import React, { Component } from 'react';
import axios from 'axios'

import us from './UserInfo.module.css';

class ProfileStatus extends Component {
  statusInputRef = React.createRef()

  state = {
    editMode: false,
    status: this.props.status
  }

/*
  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/status',)
  }
*/

  activatedEditMode = () => {
    this.setState({
      editMode: true
    })
  }

  deactivatedEditMode = () => {
    this.setState( {
      editMode: false,
    })
    this.props.updateStatus(this.state.status)
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    })
    
  }

  render() {
    return (
      <div className={us.status}>

          {!this.state.editMode &&
            <div className={us.profile__status}><span onDoubleClick={this.activatedEditMode}>
              {this.props.status || 'Status'}
            </span></div>
          }


          {this.state.editMode &&
            <div className={us.inputStatus}>
              <input 
                onChange={this.onStatusChange}
                autoFocus={true} 
                onBlur={this.deactivatedEditMode} 
                value={this.state.status}
                // placeholder={this.state.status} 
              />
            </div>
          }

      </div>
    )
  }
}

export default ProfileStatus;
