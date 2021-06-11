import { Breadcrumbs, Icon, Link } from "@material-ui/core";

const NavBar = () => {
  return (
    <div className="nav">
      <Breadcrumbs>
        <Link className="navbar" label="home" color="primary" href="/home">
          <Icon>home</Icon>
        </Link>
      </Breadcrumbs>
    </div>
  );
};

export default NavBar;
