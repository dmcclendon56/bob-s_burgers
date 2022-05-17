import { useParams } from 'react-router-dom'


function CharacterList(props) {
    let { index } = useParams()
    console.log(index)
 let character = props.character[index]
  return (
      <>
      <h2>{character.name}</h2>
      <h2>{character.id}</h2>
      <h2>{character.image}</h2>
      <h2>{character.url}</h2>
      <h2>{character.voicedBy}</h2>
      <h2>{character.wikiUrl}</h2>
   </>
  )
}

export default CharacterList