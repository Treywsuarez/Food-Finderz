// linking the various pages together to make import easier and makes the file structure cleaner. 
// using the same libraries also connects the routes together to give an output

import React from 'react'
import Home from './Home';
import Cuisine from './Cuisine';
import Searched from './Searched';
import {Route, Routes} from 'react-router-dom'
import Recipe from './Recipe';


//rendering each route to give an output on the pages
function Pages() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cuisine/:option" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />}/>
        <Route path="/recipe/:name" element={<Recipe />}/>
    </Routes>
  );
}

export default Pages