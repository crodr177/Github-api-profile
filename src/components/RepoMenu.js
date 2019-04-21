import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getRepo } from '../actions/repoActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class RepoMenu extends Component {
  componentDidMount(){
    getRepo()
  }
  render(){
    return(
      <div id="repo-menu">
        <div className="repo-categories">
          <button>Overview</button>
          <button>Repositories <span>{this.props.items.length}</span></button>
          <button>Projects <span>0</span></button>
          <button>Stars <span>0</span></button>
          <button>Followers <span>0</span></button>
          <button>Following <span>0</span></button>
        </div>
        <div className="repo-search">
          <input type="text" placeholder="Find a repository..."/>
          <div className="all-button">
            <button><span>Type:</span> All</button>
            <button><span>Language:</span> All</button>
          </div>
          <button className="new-repo"><FontAwesomeIcon icon="book" color="dark gray"/> New</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(appState) {
  return {
    items: appState.repos
  }
}

export default connect(mapStateToProps)(RepoMenu)