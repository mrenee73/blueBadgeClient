import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
   
} from 'reactstrap';
import signPic from '../../assets/neighborhoodsign.jpg';

const Header = () => {
    return (
        <header>
            <Navbar className = 'header'>
                <NavbarBrand href= '/'><h1>  Fountain Springs Neighborhood</h1></NavbarBrand>
                <Nav className= 'ml-auto' navbar>
                    <NavItem>                        
                    <img id='signPic' src={signPic} alt='neighborhood sign'/>                      
                    </NavItem>
                </Nav>
            </Navbar>
        </header>
    );
};

export default Header;