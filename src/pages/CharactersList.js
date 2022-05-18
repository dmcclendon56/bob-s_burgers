// import React from 'react'
// import { Link } from 'react-router-dom';
import App from '../App';
import { useParams } from 'react-router-dom'



function CharactersList(props) {
    let { index } = useParams()
    console.log(index)
    let charactersList = props.charactersList[index]
  return(
      <>
        <h3>{charactersList.name}</h3>
      </>
  )
  

}
export default CharactersList







// console.log(props.characterslist);

// return (
//   <div>
//       {props.charactersList ? props.charactersList.map((charactersList, idx) => (
//               <div key={idx}>
//                   <Link to={`/${idx}`} >
//                       <h2>{charactersList.name}</h2>
//                   </Link>
//               </div>
//           )) : <h3>LOADING! PLEASE WAIT!</h3>}
          
//   </div>
// )
// }