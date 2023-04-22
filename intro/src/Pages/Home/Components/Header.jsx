import { Link } from 'react-router-dom';
import logo from "../../../asset/images/logo.png"

function Header(){

    return (

    <frameElement>

    <nav>
        <Link to={"/"}>
            <img id='logo' src={logo} alt='logo' />
        </Link>
   
    <div id='nav-items'>

    <ul id='nav-list'>
    <Link to={"/"}> <li>Home</li></Link>
    <Link to={"/"}> <li>Profil</li></Link>   
    <Link to={"/"}> <li>Formation</li></Link> 
    <Link to={"/"}> <li>Expériences</li></Link> 
    <Link to={"/"}> <li>Compétences</li></Link> 
    <Link to={"/"}> <li>Langues</li></Link> 
    <Link to={"/"}> <li>Services</li></Link> 
    <Link to={"/"}> <li>Contact</li></Link> 
    </ul>

    </div>

    </nav>


    </frameElement>
    )
}

export default Header