import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProfile } from '../actions/repoActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'

class TopMenu extends Component {
  componentDidMount(){
    getProfile()
  }
  render(){
    return(
      <div id="top-menu-container">
        <div className="column-1">
          <p className="top-icon"><FontAwesomeIcon
              icon={['fab', 'github']}
              size= "2x"
            /></p>
          <input className="top-input" text="type" placeholder="Search or jump to..."/>
          <button className="pull-req">Pull requests</button>
          <button>Issues</button>
          <button>Marketplace</button>
          <button>Explore</button>
        </div>
        <div className="column-2">
        <p className="top-icon-bell"><FontAwesomeIcon
              icon="bell"
              size= "1x"
            /></p>
        <p className="top-icon-plus"><FontAwesomeIcon
              icon="plus"
              size= "1x"
            /></p>
        {
          this.props.items.map(item => (
            <p className="image-right"><a href={item.html_url}><img src={item.avatar_url}/></a></p>
          ))
        }
        </div>
      </div>
    )
  }
}

function mapStateToProps(appState){
  return {
    items: appState.profile
  }
}

export default connect(mapStateToProps)(TopMenu)
