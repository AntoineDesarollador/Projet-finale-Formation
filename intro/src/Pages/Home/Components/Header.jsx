import { Link } from 'react-router-dom';

function Header(){

    return (

    <frameElement>

<h1>Hello</h1>
    <nav>
        <Link to={"index.jsx"}>home</Link>
        <Link to={"contact"}>contact</Link>
    </nav>


    </frameElement>
    )
}

export default Header