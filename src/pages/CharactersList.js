// import React from 'react'
import { Link } from 'react-router-dom';
import App from '../App';
import { useParams } from 'react-router-dom'
import './CharactersList.css'



function CharactersList(props) {
    
  return(
        <div>
            {props.character ? props.character.map((character, idx) => (
                    <div key={idx}>
                        <Link to={`/${idx}`} >
                            <h2>{character.name}</h2>
                        </Link>
                        <hr/>
                    </div>
                )) : <h3>LOADING! PLEASE WAIT!</h3>}
                
        </div>
        )
        }
export default CharactersList
