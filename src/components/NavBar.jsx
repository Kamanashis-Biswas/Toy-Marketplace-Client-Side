import { Avatar, Dropdown, Navbar } from "flowbite-react";


const NavBar = () => {
    return (
        <Navbar
            fluid={true}
            rounded={true}
        >
            <Navbar.Brand href="/">
                <img
                    src="https://i.ibb.co/7tjX3cM/Untitled-1.png"
                    className="mr-3 h-6 sm:h-9"
                    alt="ToyTreasureBox"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    ToyTreasureBox
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Dropdown
                    arrowIcon={false}
                    inline={true}
                    label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />}
                >
                    <Dropdown.Header>
                        <span className="block text-sm">
                            Bonnie Green
                        </span>
                        <span className="block truncate text-sm font-medium">
                            name@flowbite.com
                        </span>
                    </Dropdown.Header>
                    <Dropdown.Divider />
                    <Dropdown.Item>
                        Sign out
                    </Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link
                    href="/"
                    active={true}
                >
                    Home
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                    All Toys
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                    My Toys
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                    My Toys
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                    Add A Toy
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                    Blog
                </Navbar.Link>

            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;