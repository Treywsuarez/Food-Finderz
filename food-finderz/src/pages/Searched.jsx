import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// search function which used the saved information (useState) and fetches the results of recipes asked for
function Searched() {

    const [searched, setSearched] = useState([]);
    let params = useParams();

    const getSearched = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`);
        const recipes = await data.json();
        setSearched(recipes.results);

    };

    useEffect(() => {
        getSearched(params.search);
    },[params.search]);
// looping the arrays of the item.id also fetches further information about the item, an image and the title
    return <Grid>
        {searched.map((item) => {
            return(
                <Card key={item.id}>
                    <Link to={'/recipe/' + item.id}>
                    <img src={item.image} alt=""/>
                    <h4>{item.title}</h4>
                    </Link>
                </Card>
            )
        })}
    </Grid>
}

//styling of the card display
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

export default Searched