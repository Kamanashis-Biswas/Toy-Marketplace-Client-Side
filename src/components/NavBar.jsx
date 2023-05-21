import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const path = useLocation().pathname;
  const navigate = useNavigate();
  return (
    <div className="mt-3 mb-5 md:mb-10">
      <Navbar
        fluid={true}
        rounded={true}
      >
        <Navbar.Brand>
          <img
            src="https://i.ibb.co/Bc4TBhc/Vintage-toys-pretty-clipart-006.png"
            className="mr-3 h-6 sm:h-9"
            alt="ToyTreasureBox"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            CarWonderland
          </span>
        </Navbar.Brand>
        {user ? (
          <div className="flex md:order-2">
            <Dropdown
              arrowIcon={false}
              inline={true}
              label={
                <Avatar
                  alt="User settings"
                  img={user && user.photoURL}
                  rounded={true}
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">
                  {user && user.displayName}
                </span>
                <span className="block truncate text-sm font-medium">
                  {user && user.email}
                </span>
              </Dropdown.Header>

              <Dropdown.Divider />
              <Dropdown.Item onClick={() => { logOut(); navigate('/') }}>Sign out</Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
          </div>
        ) : <div className="flex md:order-2 md:hidden">
          <Dropdown
            arrowIcon={false}
            inline={true}
          >
            {/* <Dropdown.Header>
              <span className="block text-sm">
                Bonnie Green
              </span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>
              Dashboard
            </Dropdown.Item>
            <Dropdown.Item>
              Settings
            </Dropdown.Item>
            <Dropdown.Item>
              Earnings
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
              Sign out
            </Dropdown.Item> */}
          </Dropdown>
          <Navbar.Toggle />
        </div>}
        <Navbar.Collapse>
          <Link
            to="/"
            className={path === "/" ? "underline" : ""}
          >
            Home
          </Link>
          <Link to="/alltoys"
            className={path === "/alltoys" ? "underline" : ""}>
            All Toys
          </Link>
          {user && (<>
            <Link to="/mytoys"
              className={path === "/mytoys" ? "underline" : ""}>
              My Toys
            </Link>
            <Link to="/addatoy"
              className={path === "/addatoy" ? "underline" : ""}>
              Add A Toy
            </Link></>)
          }
          <Link to="/blog"
            className={path === "/blog" ? "underline" : ""}>
            Blog
          </Link>
          {!user && (
            <Link to="login" className={path === "/login" ? "underline" : ""}>
              Login
            </Link>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;