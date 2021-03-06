import React, { Component } from 'react';

class AtlasNavFooter extends Component {
  render() {
    return (
      <div id="footer" className="fixed-bottom px-3 py-1">
        <a
          className="text-light small"
          href="https://kpmp.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          &copy; Kidney Precision Medicine Project
        </a>
      </div>
    );
  }
}

export default AtlasNavFooter;

