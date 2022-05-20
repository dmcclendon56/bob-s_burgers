import React from 'react'
import Header from '../componets/Header'
import "./CharacterPage.css"

function About(props) {
  return (
    <div>
      <img className='family' src='https://www.billboard.com/wp-content/uploads/media/bobs-burgers-2017-billboard-1548.jpg' alt='family portrait'></img>
        <h2 className='title'>Bob's Burgers Blurb</h2>
        <h4 className='blurb'>An animated sitcom about a lax burger restaurant 
          owner and his eccentric family including his wife, two daughters, and son. The Belcher family is all but normal. There is never a dull day in the restaurant.
          These parents struggle to get by, and their kids do all but make it easy for them.</h4>
    </div>
  )
}

export default About