// For Cuisine, the library is the same, react router for the route
// framer motion for animation
// styled components for styles 
// react for executing codes that happens during the lifecycle - it runs on every render

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';


// useParam is another hook, which basically is a parameter which has a named variable passed into a function
// this declares a route so the React router is rendering the same component, if there is a match on key words (URL and React)
function Cuisine() {

    const [cuisine, setCuisine] = useState([]);
    let params = useParams();
// API calls are made via .json - which transmits the data and we fetch the results 
    const getCuisine = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
        const recipes = await data.json();
        setCuisine(recipes.results);

    };

    useEffect(() => {
        getCuisine(params.option);
        console.log(params.option);
    }, [params.option]);
// Mapping loops the arrays together and by using the arrow function we are going to output something on the screen 
// i.e. we are rendering the 'item.id' which will output the recipe linked to it. By using it as a key, we create more outputs
// i.e. attached item.image to display the recipe for visual representation as well as adding an item.title for the name of the recipe
    return ( 
    <Grid>
        {cuisine.map((item) => {
            return (
                <Card key={item.id}>
                    <Link to={'/recipe/' + item.id}>
                    <img src={item.image} alt="" />
                    <h4>{item.title}</h4>
                    </Link>
                </Card>
            );
        })}
    </Grid>
)}

// styling of the page i.e. the cards on display by using grid format (Grid styled.div)
// this includes the imaging and writing on the cards (they are linked to Card styled.div)
const Grid = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 2rem;
`;

const Card = styled.div`
img{
    width: 100%;
    border-radius: 2rem;
}
a{
    text-decoration: none;
}
h4{
    text-align: center;
    padding: 2.5em;
    font-size: 1.rem;
}
`;

export default Cuisine;