import React from 'react';
import AtlasNavFooter from './atlas';

const NavFooter = (props) => {
  return (
    <div>
      {
        props.app == 'atlas' &&
        <AtlasNavFooter />
      }
    </div>
  );
}

export default NavFooter;
