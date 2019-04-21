import React, { Component } from 'react';
import '../styles/base.css'
import { Provider } from 'react-redux'
import store from '../store'
import ProfileSection from './ProfileSection'
import Repos from './Repos'
import TopMenu from './TopMenu'
import Footer from './Footer'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faGrin } from '@fortawesome/free-regular-svg-icons';
import { faBook, faBell, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faGrin, faBook, faGithub, faBell, faPlus);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div id="github-page">
          <TopMenu/>
          <div id="main-container">
            <div id="content-container">
              <ProfileSection/>
              <Repos/>
            </div>
            <Footer/>
          </div>
        </div>
      </Provider>
    )
  }
}

export default App;
