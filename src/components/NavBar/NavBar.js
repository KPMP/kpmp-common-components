import AtlasNavBar from './atlas';

const NavBar = (props) => {
  return (
    <div>
      {
        props.app == 'atlas' &&
        <AtlasNavBar />
      }
    </div>
  );
}

export default NavBar;
