import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

const Header = () => {
    return (
        <header>
            <Navbar className = 'header'>
                <NavbarBrand href= '/'></NavbarBrand>
                <Nav className= 'ml-auto' navbar>
                    <NavItem>                        
                            <NavLink href='https://github.com/yourhandle/yourRepoForThisApp'>
                               
                            </NavLink>                       
                    </NavItem>
                </Nav>
            </Navbar>
        </header>
    );
};

export default Header;