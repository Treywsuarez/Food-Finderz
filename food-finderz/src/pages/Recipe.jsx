import { useEffect, useState } from "react";
// also using the styled components to make the page cleaner and for users to read easier import { useEffect, useState } from "react";


import styled from "styled-components";
import { useParams } from "react-router-dom";

import React from 'react'

// useParams to set up parameters again and also build up user interface by having an activeTab buttons that would fetch results
//by using useState it 'remembers' some of the information between each rendering 
function Recipe() {

  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

// API spoonacular is used to request calls

  const fetchDetails = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
    const detailData = await data.json();
    setDetails(detailData);
  };

// use Effect: the result of the details (param) is fetched and displayed.
  useEffect(() => {
    fetchDetails();
  }, [params.name]);


  //once a recipe is chosen (details.title), it would render the recipe chosen (by the params) and list the instructions and ingredients
  // the ingredients and instructions would be accessed via the click button
  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>

      <Info>
        <Btn className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab('instructions')}>Instruction</Btn>
        <Btn className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')}>Ingredients</Btn>
        {activeTab === 'instructions' && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        )}

        {activeTab === 'ingredients' && (

          <ul>
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )};

      </Info>

    </DetailWrapper>
  )
}

//the wrapper styling is more detailed with the writing on the images when the recipe page is opened
const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active{
    background: blue;
    color: white;
  }
  h2{
    margin-bottom: 2rem;
  }
  li{
    font-size: 1.2rem;
    line-height: 2.5rem
  }
  ul{
    margin-top: 2rem;
  }

`;

//tried to create a button styling function around the icon
const Btn = styled.button`
padding: 1rem 2rem;
color: blue;
background: white;
border: 2px solid blue;
margin-right: 2rem;
font-weight: 600;
`

const Info = styled.div`
  margin-left: 10rem;
`

export default Recipe