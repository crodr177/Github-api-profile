import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProfile } from '../actions/repoActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ProfileSection extends Component{
  componentDidMount(){
    getProfile()
  }
  render(){
    return(
      <div id="profile-container">
        {
          this.props.items.map(item => (
            <div className="profile-section" key={item.id}>
              <div className="profile-img">
                <img src={item.avatar_url} alt="avatar"/>
                <div className="below-img">
                  <p className="icon"><FontAwesomeIcon
                      icon={['far', 'grin']}
                      color="dark gray"
                    /></p>
                  <p className="status">Set status</p>
                </div>
              </div>
              <p className="name">{item.name}</p>
              <p className="username">{item.login}</p>
              <button className="edit">Edit</button>
            </div>
          ))
        }
      </div>
    )
  }
}

function mapStateToProps(appState) {
  return {
    items: appState.profile
  }
}

export default connect(mapStateToProps)(ProfileSection)