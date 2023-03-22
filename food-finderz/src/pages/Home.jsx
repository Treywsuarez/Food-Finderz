// rendering out the components separately helps with the file structure and makes it cleaner
// The two links we wanted to display on the front page is Veggie Option and Popular Option which would be attractive to a

import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import Search from "../components/Search";
import Gluten from "../components/Gluten";
import styled from "styled-components";


function Home() {
  return (
    <MainPage>
        <Veggie /> 
        <Gluten />
        <Popular />
    </MainPage>
  )
}

const MainPage = styled.div`
  `

export default Home