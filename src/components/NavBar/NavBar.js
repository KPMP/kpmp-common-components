import React from 'react';
import AtlasNavBar from './atlas';

const NavBar = (props) => {
  return (
    <div>
      {
        props.app == 'atlas' &&
        <AtlasNavBar comparatorOn={props.comparatorOn}/>
      }
    </div>
  );
}

export default NavBar;
