import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const path = useLocation().pathname;
  const navigate = useNavigate();
  return (
    <div className="bg-slate-300 bg-opacity-90">
      <div className="max-w-7xl mx-auto">
        <div className="mt-3 mb-5 md:mb-10">
          <Navbar
            fluid={true}
            rounded={true}
            className="bg-slate-300 bg-opacity-30"
          >
            <Navbar.Brand>
              <img
                src="https://i.ibb.co/Bc4TBhc/Vintage-toys-pretty-clipart-006.png"
                className="mr-3 h-6 sm:h-9"
                alt=" CarWonderland"
              />
              <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                CarWonderland
              </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
              {user && (
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
                  <Dropdown.Item
                    onClick={() => {
                      logOut();
                      navigate("/");
                    }}
                  >
                    Sign out
                  </Dropdown.Item>
                </Dropdown>
              )}
              <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
              <Link to="/" className={path === "/" ? "underline" : ""}>
                Home
              </Link>
              <Link
                to="/alltoys"
                className={path === "/alltoys" ? "underline" : ""}
              >
                All Toys
              </Link>
              {user && (
                <>
                  <Link
                    to="/mytoys"
                    className={path === "/mytoys" ? "underline" : ""}
                  >
                    My Toys
                  </Link>
                  <Link
                    to="/addatoy"
                    className={path === "/addatoy" ? "underline" : ""}
                  >
                    Add A Toy
                  </Link>
                </>
              )}
              <Link to="/blog" className={path === "/blog" ? "underline" : ""}>
                Blog
              </Link>
              {!user && (
                <Link
                  to="login"
                  className={path === "/login" ? "underline" : ""}
                >
                  Login
                </Link>
              )}
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
