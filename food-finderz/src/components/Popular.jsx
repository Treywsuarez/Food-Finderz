// page for getting the popular recipes from the
// spoonacular API we are using for project

import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from "react-router-dom"

function Popular() {
  // define a variable and function to use
  // we also specify array as the state to use for our data
  const [popular, setPopular] = useState([]);

  // as soon as we get our component
  // it renders using a function we
  // imported from react
  useEffect(() => {
    getPopular();
  }, []);


  // need to get all our data before using

 // need to get all our data before using

 // the response from the API
 // using async to create the request to the 
 // spoonacular api
  const getPopular = async () => {


    const check = localStorage.getItem('popular');
    if(check){
      setPopular(JSON.parse(check));
    }else{
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
      const data = await api.json();

      localStorage.setItem('popular', JSON.stringify(data.recipes));
      setPopular(data.recipes);
    }

   

    // waiting until the fetch from the API is completed before proceeding with the function
    // using our api key in seperate file as part of the http request
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
    // returning the requested data in JSON format
    const data = await api.json();
    setPopular(data.recipes);

  };

  return <div>


    <Wrapper>
      <h3>Popular Picks</h3>

      <Splide options={{
          perPage: 3,
          arrows: true,
          pagination: false,
          drag: "free",
          gap: "5rem", }}>

          
          {/* using map, we iterate over what data is returned

          {/*using map, we iterate over what data is returned

          and render a card for each recipe */}
        {popular.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={'/recipe/' + recipe.id}>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            );

          })}
      </Splide>
    </Wrapper>

  </div>


}

// styling for each card & the wrapper to contain it

const Wrapper = styled.div`
  margin: 4rem 4rem
  padding: 2rem 
`;

const Card = styled.div`
  min-height: 10rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img{
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p{
    position: absolute;
    z-index: 10;
    left: 50%
    bottom: 0%
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height:100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));`

export default Popular;