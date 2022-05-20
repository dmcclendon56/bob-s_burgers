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
    const logo = {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto"
,    }
  

return (
  <>
  <img  src='https://i.pinimg.com/originals/2e/a9/e2/2ea9e2ee06ca162ba3e2b0e3548c842c.jpg' alt="Bob's burger street view"/>
    <header>
        <img style={logo} src="https://d144mzi0q5mijx.cloudfront.net/img/B/O/Bobs-Burgers.png"/>
        <nav style={navStyle}>
        <Link to="/">
            <div>HOME</div>
        </Link>
        <Link to= "/characterslist">
          <div>CHARACTER LIST</div>
        </Link>
        <Link to="/about">
          <div>ABOUT</div>
        </Link>
        </nav>  
      
    </header>
    </>
    ); 
  }
  
  export default Header;