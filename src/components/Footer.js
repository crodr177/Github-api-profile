import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = (props) => (
  <div id="footer">
    <div className="bottom-column-1">
      <p id="copyright">&copy; 2019 Github, Inc.</p>
      <p>Terms</p>
      <p>Privacy</p>
      <p>Security</p>
      <p>Status</p>
      <p>Help</p>
    </div>
    <div className="bottom-column-2">
    <p className="bottom-icon"><FontAwesomeIcon
        icon={['fab', 'github']}
      /></p>
    </div>
    <div className="bottom-column-3">
    <p>Contact Github</p>
      <p>Pricing</p>
      <p>API</p>
      <p>Training</p>
      <p>Blog</p>
      <p>About</p>
    </div>
  </div>
)

export default Footer