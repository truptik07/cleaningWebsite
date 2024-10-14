import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <div>

      <div className='navbar'>
        <div className='name'> Genei Facility management
        </div>

        <div className='Search-box'>
          {/* <form action=''>
            <input type='text' name='search' id='srch' placeholder='Search'>
            </input><button><i class="fa-solid fa-magnifying-glass"></i></button>
          </form> */}
        </div>
        <nav>
          <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='/teams'>About</a></li>
            {/* <li><a href='/login'>Login</a></li> */}
            
            <li><Link to="/gallary">Gallary</Link></li>



          </ul>

        </nav>
      </div>
    </div>
  )
}

export default Navbar