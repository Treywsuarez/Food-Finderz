import Pages from "./pages/Pages";
import Options from "./components/Options";
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Options />
      <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
