// options page
// using react libraries, we 'imported' icons and styles that are displayed on our page.
// e.g. used Hamburger to represent American food which is one of the cuisines displayed on top of the page (Options). 

import { FaWineGlassAlt} from 'react-icons/fa';
import {GiNoodles, GiChopsticks, GiHamburger} from 'react-icons/gi';
import styled from "styled-components";
import {NavLink} from 'react-router-dom';
//the react icons are displayed via a navlink which would send the user to the targeted route

import React from 'react'

// the return function for the Options is 4 cuisines listed below. 
// As these are already defined, the user would be using these links to navigate around the web application.
// this is possible due to the import and return function
function Options() {
  return (
    <List>
        <StyleLink to={'/Cuisine/Italian'}>
            <FaWineGlassAlt/>
            <h4>Mediterranean</h4>
        </StyleLink>

        <StyleLink to={'/Cuisine/American'}>
            <GiHamburger/>
            <h4>American</h4>
        </StyleLink>

        <StyleLink to={'/Cuisine/Thai'}>
            <GiNoodles/>
            <h4>Chinese</h4>
        </StyleLink>

        <StyleLink to={'/Cuisine/Japanese'}>
            <GiChopsticks/>
            <h4>Japanese</h4>
        </StyleLink>
    </List>
  )
}

//layout of the icons and the styling.
const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
    `;
const StyleLink = styled(NavLink)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 50%;
text-decoration: none;
cursor: pointer;
margin-right: 2rem;


h4{
    font-size: 0.8rem;
}

svg{
    color: black;
    font-size: 1rem
}
`;
export default Options