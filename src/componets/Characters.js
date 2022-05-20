// import { useParams } from 'react-router-dom'
//https://www.npmjs.com/package/react-paginate
// https://www.youtube.com/watch?v=kMuRr53RjcE&t=1408s
import { Link } from 'react-router-dom';
// import App from '../App';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';



function Characters(props) {
  const [character, setCharacter] = useState([])
  const [currentPage, setCurrentPage]= useState(0)
  // const [pageCount, setpageCount] = useState(0)

  useEffect(()=> {
    const getCharacter = async () => {
      const res = await fetch(
        `https://bobsburgers-api.herokuapp.com/characters?limit=6&skip=${currentPage * 6}`
      );
      const data = await res.json(); 
      setCharacter(data);
    };
    getCharacter();
  })
    

    const handlePageClick = async (data) =>{
      setCurrentPage(data.selected)
      console.log(data.selected) 
    }


  return (
     <div>
        {character ? character.map((character, idx) => (
                <div key={idx}>
                  <div className= "card shadow-sm w-flex" style={{maxHeigh: 20}}>
                  <div className="card-title text-center h2">
                    <Link to={`/${idx +(currentPage * 6)}`} >
                        <h2 >{character.name}</h2>
                    </Link>
                    <img className='"card-subtitle mb-2 text-muted text-center' src={character.image} alt='characters portrait'></img>
                    <h2 className='card-text'>{character.occupation}</h2>
                    
                </div>
                </div>
                </div>
            )) : <h3>LOADING...</h3>}
    
    <ReactPaginate
          previousLabel={'<<'}
          nextLabel={'>>'}
          breakLabel={'...'}
          pageCount={85}
          marginPagesDisplayed={4}
          pageRangeDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName={'pagination justify-content-center'}
          pageClassName={'page-item'}
          pageLinkClassName={'page-link'}
          previousClassName={'page-item'}
          previousLinkClassName={'page-link'}
          nextClassName={'page-item'}
          nextLinkClassName={'page-link'}
          breakClassName={'page-item'}
          breakLinkClassName={'page-link'}
          activeClassName={'active'}
          /> 
    </div>
  )
}
  

   
    
   
export default Characters;