import { useParams } from 'react-router-dom'


function CharacterList(props) {
    let { index } = useParams()
    console.log(index)
 let character = props.character[index]
  return (
      <>
      <h2>{character.name}</h2>
      <img src={character.image} alt="characters picture"></img>
      <h2>Gender: {character.gender}</h2>
      <h2>Hair Color: {character.hairColor}</h2>
      <h2>First Episode Character Appeared: {character.firstEpisode}</h2>
      <h2>Voiced By: {character.voicedBy}</h2>
      <a href={character.wikiUrl}> {character.name}'s Wiki-Page</a>
   </>
  )
}

export default CharacterList