import React from 'react'
import { Link } from 'react-router-dom'

function Navbar  ()  {
  return (
    <div>
      <header id="site-header" class="fixed-top">
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <a class="navbar-brand">
                        <i class="fas fa-graduation-cap"></i>
                            Sarees
                    </a>
                    <button  class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon fa icon-expand fa-bars"></span>
                        <span class="navbar-toggler-icon fa icon-close fa-times"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarScroll">
                        <ul class="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
                            <li class="nav-item" /*sec:authorize="isAnonymous()"*/>
                               <Link to="/home"  class="nav-link" aria-current="page">Home</Link>
                            </li>
                            
                            <li class="nav-item" /*sec:authorize="isAnonymous()"*/>
                                <Link to="/sarees"  class="nav-link">Sarees</Link>
                            </li>
                            <li class="nav-item" /*sec:authorize="isAnonymous()"*/>
                                <Link to="/contact"  class="nav-link">Contact</Link>
                            </li>
                         
                            <li class="nav-item" /*sec:authorize="isAnonymous()"*/>
                                <Link  to="/login" class="nav-link">LogIn</Link>
                            </li>
                           
                          
                            <li class="nav-item" /*sec:authorize="isAuthenticated()"*/>
                                <Link to="/dashboard"  class="nav-link">Dashboard</Link>
                            </li>
                           <li class="nav-item">
                               <Link to="/login" class="nav-link">Logout</Link>
                           </li>
                                                        
                         </ul>
                     </div>
                    
                     <div class="cont-ser-position">
                         <nav class="navigation">
                             <div class="theme-switch-wrapper">
                                 <label class="theme-switch" for="checkbox">
                                     <input type="checkbox" id="checkbox"/>
                                     <div class="mode-container">
                                         <i class="gg-sun"></i>
                                         <i class="gg-moon"></i>
                                     </div>
                                 </label>
                             </div>
                         </nav>
                     </div>
                     {/* <!-- //toggle switch for light and dark theme --> */}
                 </nav>
             </div>
         </header>
    </div>
  )
}

export default Navbar