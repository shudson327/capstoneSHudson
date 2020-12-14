import React from 'react';
import { NavLink } from 'react-router-dom'
import $ from 'jquery'



const Navbar = () => {
    const handleClick = e => {
      e.preventDefault();
      document.getElementsByClassName('navTrigger')[0].classList.toggle('active');
      document.getElementById('mainListDiv').classList.toggle('show_list');
      $('#mainListDiv').fadeIn();
    }

    return (
        <header>
        <nav className="nav">
            <div className="container">
                <div className="logo">
                    <NavLink to="/">Home</NavLink>
                </div>
                <div id="mainListDiv" className="main_list">
                    <ul className="navlinks">
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/addattraction">Add Attraction</NavLink></li>
                    <li><NavLink to="/viewattractions">View Attractions</NavLink></li>
                    </ul>
                </div>
                <span onClick={handleClick} className="navTrigger">
                    <i></i>
                    <i></i>
                    <i></i>
                </span>
            </div>
        </nav>
        </header>
    )
}

export default Navbar






{/* <li><NavLink to="/thingstodo" onClick={myFunction} className="dropbtn dropdown-content" id="myDropdown">Things To Do</NavLink></li></ul>
                            <NavLink to="/Art">Art</NavLink>
                            <NavLink to="/Sport">Sports</NavLink>
                            <NavLink to="/Food">Breweries/Food</NavLink>
                            <NavLink to="/Entertainment">Entertainment</NavLink>
                            <NavLink to="/Tour">Tours</NavLink>
                    </div>
                    </div> */}

                    {/* const myFunction = () => {
        document.getElementById("myDropdown").classList.toggle("show");
    
      
      // Close the dropdown if the user clicks outside of it
      window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      }
    } */}