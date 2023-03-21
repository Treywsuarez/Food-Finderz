// rendering out the components separately helps with the file structure and makes it cleaner

import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import Search from "../components/Search";
import Gluten from "../components/Gluten"


function Home() {
  return (
    <div>
        <Veggie /> 
        <Gluten />
        <Popular />
    </div>
  )
}

export default Home