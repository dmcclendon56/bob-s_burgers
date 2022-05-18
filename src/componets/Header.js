import { } from "react-router-dom";
import { Link } from 'react-router-dom';
import CharactersList from "../pages/CharactersList";
import About from "../pages/About";


function Header(props) {
    const navStyle = {
        display: "flex",
        justifyContent: "space-around",
        border: "3px solid black",
        padding: "8px",
        width: "90%",
        margin: "auto",
    };

return (
    <header>
        <h1>Bob's Burgers</h1>
        <nav style={navStyle}>
        <Link to="/">
            <div>HOME</div>
        </Link>
        <Link to={<CharactersList />}>
          <div>CHARACTER LIST</div>
        </Link>
        <Link to="../pages/About">
          <div>ABOUT</div>
        </Link>
        </nav>  
    </header>
    ); 
  }
  
  export default Header;