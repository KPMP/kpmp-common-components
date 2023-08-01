import React from 'react';
import AtlasNavBar from './atlas';

const NavBar = (props) => {
  return (
    <div>
      {
        props.app == 'atlas' &&
        <AtlasNavBar history={props.history}/>
      }
    </div>
  );
}

export default NavBar;
