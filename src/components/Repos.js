import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getRepo } from '../actions/repoActions'
import moment from 'moment'
import RepoMenu from './RepoMenu'

class Repos extends Component {
  componentDidMount(){
    getRepo()
  }
  render(){
    return(
      <div id="repos-container">
        <RepoMenu/>
        <ul>
        {
          this.props.items.map(item => (
              <li key={item.id}>
                <div className="bottom-row">
                  <p className="repo-name">{item.name}</p>
                  <div className="lang-date">
                    <p className={item.language === "CSS" ? "purple": item.language === "JavaScript" ? "yellow": item.language === "HTML" ? "orange": ''}>{item.language}</p>
                    <p className="repo-date">Updated {moment(item.updated_at).fromNow()}</p>
                  </div>
                </div>
                <div className="button-star">
                  <button className="star">&#9733; Star</button>
                </div>
              </li>
          ))
        }
        </ul>
      </div>
    )
  }
}

function mapStateToProps(appState){
  return {
    items: appState.repos
  }
}

export default connect(mapStateToProps)(Repos)