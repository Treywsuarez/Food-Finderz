// rendering out the components separately helps with the file structure and makes it cleaner

import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import Search from "../components/Search";


function Home() {
  return (
    <div>
        <Veggie /> 
        <Popular />
    </div>
  )
}

export default Home