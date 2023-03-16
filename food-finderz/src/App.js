import Pages from "./pages/Pages";
import Options from "./components/Options";
import {BrowserRouter} from 'react-router-dom'
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Search />
      <Options />
      <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
