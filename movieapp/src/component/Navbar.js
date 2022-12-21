import React from 'react'
import ReactStars from 'react-rating-stars-component'

const Navbar = ({ settext , setrate }) => {
  return (
    <div>
    < ul className='menu-bar'>
        <li className=''> <img src='a.png' alt='logo' className='image' ></img></li>
 <li className='lii'>Watch Now</li> 
 <li className='lii'>Movies</li> 
 <li className='lii'>TV Shows</li> 
 <li className='lii'> Sports</li>
 <li className='lii'>Kids</li> 
 <li className='lii'>Library</li> 
 <li>

      <ReactStars  count={5} size={24} activeColor="#06bbcc"  onChange={(newRating) => setrate(newRating)} />
    
<div className='search-box'>
    <button className="btn-search"><i className='fas fa-search'></i></button>
    <input type="text" className="input-search" placeholder="Search" onChange={(e) => settext(e.target.value) } ></input>
    </div>
    </li>
    </ul>
 
 </div>



  )
}

export default Navbar 