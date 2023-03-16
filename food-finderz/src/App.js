import Pages from "./pages/Pages";
import Options from "./components/Options";
import {BrowserRouter} from 'react-router-dom'
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiForkKnifeSpoon } from "react-icons/gi";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
        <GiForkKnifeSpoon />
        <Logo to={'/'}>Food Finderz </Logo>
      </Nav>
      <Search />
      <Options />
      <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1rem;
  font-weight: 400;
`;

const Nav = styled.div`
  padding: 4rem 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg{
    font-size: 1rem;
  }
`

export default App;
