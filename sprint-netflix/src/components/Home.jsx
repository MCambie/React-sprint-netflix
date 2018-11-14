import React from 'react';
import {Link} from 'react-router-dom';


const Landing =()=>(
    <div className="landing">
        <h1 className="main-title">Welcome to our netflix Workshop  </h1>
        <Link to="/movie" className="home-button">Show me the magick</Link>
    </div>
)
export default Landing;