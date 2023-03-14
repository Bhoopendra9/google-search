import "./App.css";
import Home from "./Components/Home";
import SearchResult from "./Components/SearchResult";
import { AppContext} from "../src/Utils/ContextApi";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <AppContext>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/:query/:startIndex" element={<SearchResult />} />
          </Routes>
        </BrowserRouter>
      </AppContext>
    </div>
  );
}

export default App;
