// different react libraries used for functionality purposes when we display our page. 
// these are written in the 'import' section listed at the top of the page
// each component (options/popular/search/veggie jsx) helps with the file structure before being imported on 'pages' folder


import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from "react-router-dom"


function Veggie() {
  const [veggie, setVeggie] = useState([]);

  // useEffect allows side effects to be performed in the component
  // using an empty array allows another function/ a value to be filled in from another source
  useEffect(() => {
    getVeggie();
  }, []);


  //using async allows several functions to be called independently from each other
  const getVeggie = async () => {

    //when API calls are made, we've put 9 - this means the api key will call 9 recipes  - will give a varity of options
    const check = localStorage.getItem('veggie');
    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegan`);
      const data = await api.json();

      // local.Storage allows information to be 'stored' - there is no expiration date, even when the page is refreshed (in this case the recipes wouldn't disappear)
      localStorage.setItem('veggie', JSON.stringify(data.recipes));
      setVeggie(data.recipes);
    }


  };
  return (
    <div>

{/* using wrapper as an object to create a neater structure and maximise code reuse */}
{/* splide is one of the functions to allow images to be shown on a slide*/}
      <Wrapper> 
        
        <h3>Our Vegan Picks</h3>

        <Splide options={{
          perPage: 2,
          arrows: true,
          pagination: false,
          drag: "free",
          gap: "5rem",
        }}>
          {veggie.map((recipe) => {
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
  )
}

// styling of the the images in cards and the writing style of names of the recipes
const Wrapper = styled.div`
  margin: 4rem 4rem
  padding: 5rem 
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
    height: 100%;
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

export default Veggie