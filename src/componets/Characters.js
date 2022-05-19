// import { useParams } from 'react-router-dom'
//https://www.npmjs.com/package/react-paginate
import { Link } from 'react-router-dom';
// import App from '../App';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';


//


// function Characters(props) {
//   const itemsPerPage = props.itemsPerPage
//   const items = props.character ? props.character : []
  // console.log(items)

//   // We start with an empty list of items.
//   const [currentItems, setCurrentItems] = useState(null);
//   const [pageCount, setPageCount] = useState(0);
//   // Here we use item offsets; we could also use page offsets
//   // following the API or data you're working with.
//   const [itemOffset, setItemOffset] = useState(0);
  

  // useEffect(() => {
  //   // Fetch items from another resources.
  //   const endOffset = itemOffset + itemsPerPage;
  //   console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  //   setCurrentItems(items.slice(itemOffset, endOffset));
  //   setPageCount(Math.ceil(items.length / itemsPerPage));
  // }, [itemOffset, itemsPerPage]);
  
//   // Invoke when user click to request another page.
//   const handlePageClick = (event) => {
//     const newOffset = (event.selected * itemsPerPage) % items.length;
//     console.log(
//       `User requested page number ${event.selected}, which is offset ${newOffset}`
//     );
//     setItemOffset(newOffset);
//   };

//   return ( 
//     <>
//       <Items currentItems={currentItems} />
//       <ReactPaginate
//         breakLabel="..."
//         nextLabel="next >"
//         onPageChange={handlePageClick}
//         pageRangeDisplayed={5}
//         pageCount={pageCount}
//         previousLabel="< previous"
//         renderOnZeroPageCount={null}
//       />
//     </>
//   );
// }
//IN CHARACTERS FUNCTION
// THIS TO GO INTO INDEX TO UPDATE
//(Page group - 1) * itemsPerPage
// function Items({ currentItems }) {
  
//   return (
//     <div >
//       {currentItems ?
//         currentItems.map((character, idx) => (
//           <div key={idx}>
//               <Link to={`/${idx}`} >
//                   <h2>{character.name}</h2>
//               </Link>
//               <img src={character.image} alt='characters picture'></img>
//               <h2>{character.occupation}</h2>
//               <hr />
//           </div>
//       )) : <h3>LOADING! PLEASE WAIT!</h3>}
      
//     </div>
//   );
// }
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
    // console.log(items);
    // console.log(props.character);

    // const fetchCharacter = async (currentPage) =>{
    //   const res = await fetch(
    //     ``
    //   );
    //   const data = await res.json()
    //   return data;
    // }

    const handlePageClick = async (data) =>{
      setCurrentPage(data.selected)
      console.log(data.selected)

      // let currentPage = data.selected 
      // const charactersFromServer = await fetchCharacter(currentPage);
      //     console.log(charactersFromServer)
      // setCharacter(charactersFromServer)
    
    }


  return (
     <div>
  {/* {character.map((item) =>{
//   return <div className='col-sm-4 col-md-2 v my-1'>
//     {/* <div className= "card shadow-sm w-100" style={{minHeigh: 225}}>
//     <div className="card-body">
//         <h5 className="card-title text-center h2"></h5>
//         <h6 className='"card-subtitle mb-2 text-muted text-center'></h6>
//         <p className='card-text'></p>
//     </div>
//     </div> */}

    <ReactPaginate
          previousLabel={'<<'}
          nextLabel={'>>'}
          breakLabel={'...'}
          pageCount={20}
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
      
        {character ? character.map((character, idx) => (
                <div key={idx}>
                  <div className= "card shadow-sm w-flex" style={{maxHeigh: 20}}>
                  <div className="card-title text-center h2">
                    <Link to={`/${idx +(currentPage * 6)}`} >
                        <h2 >{character.name}</h2>
                    </Link>
                    <img className='"card-subtitle mb-2 text-muted text-center' src={character.image} alt='characters portrait'></img>
                    <h2 className='card-text'>{character.occupation}</h2>
                    <button>View More</button>
                </div>
                </div>
                </div>
            )) : <h3>LOADING...</h3>}
    
    </div>
  )
}
  

   
    
   
export default Characters;