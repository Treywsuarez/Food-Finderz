// adding a search functionality to the app
// allowing the user to search for recipes.
// used by searched page.

import styled from 'styled-components';
import {useState} from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


function Search() {
    // getting input and setInput function and setting its
    // state to a string
    const [input, setInput] = useState("");
    const navigate = useNavigate();
// function to be able to press the enter key to search
    const submitField = (e) => {
        e.preventDefault();
        navigate('/searched/' + input);
    };

  return (
    <FormStyle onSubmit={submitField}>
        <FaSearch></FaSearch>
        {/* gives us the ability to use the text inputted into
            the form bar  */}
        <input onChange ={(e) => setInput(e.target.value)}
        type="text" 
        value={input} />
        
        
    </FormStyle>
  )
}
// styling for the form used to search
const FormStyle = styled.form`
    margin: 0rem 20rem;
    width: 100%;
    position: relative;
    input{
        border: none;
        background: blue;
        font-size: 1.5rem;
        color: white;
        padding: 1rem 15rem;
        border: none;
        border-radius: 5rem;
        outline: none;
    }
    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }
`;

export default Search