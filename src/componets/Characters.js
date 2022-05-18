// import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import App from '../App';

function Characters(props) {
    console.log(props.character);

  return (
    <div>
        {props.character ? props.character.map((character, idx) => (
                <div key={idx}>
                    <Link to={`/${idx}`} >
                        <h2>{character.name}</h2>
                    </Link>
                    <img src={character.image} alt='characters picture'></img>
                    <h2>{character.occupation}</h2>
                    <hr />
                </div>
            )) : <h3>LOADING! PLEASE WAIT!</h3>}
            
    </div>
  )
}
  

   
    
   
export default Characters;