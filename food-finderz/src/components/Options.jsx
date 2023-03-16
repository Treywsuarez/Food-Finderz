import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks} from 'react-icons/gi';
import styled from "styled-components";
import {NavLink} from 'react-router-dom';


import React from 'react'

function Options() {
  return (
    <List>
        <StyleLink to={'/Cuisine/Italian'}>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </StyleLink>

        <StyleLink to={'/Cuisine/American'}>
            <FaHamburger/>
            <h4>American</h4>
        </StyleLink>

        <StyleLink to={'/Cuisine/Thai'}>
            <GiNoodles/>
            <h4>Thai</h4>
        </StyleLink>

        <StyleLink to={'/Cuisine/Japanese'}>
            <GiChopsticks/>
            <h4>Japanese</h4>
        </StyleLink>
    </List>
  )
}

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