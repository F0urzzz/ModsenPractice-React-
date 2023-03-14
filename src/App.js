import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "./components/pages/MainPage/MainPage";
import StartPage from "./components/pages/StartPage/StartPage";
import './styles/App.css';
import { paths } from "./constants/paths";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
              <Routes>     
                  <Route path={paths.pathtostart} element={<StartPage/>}/>
                  <Route path={paths.pathtomain} element={<MainPage/>}/>
              </Routes>
            </BrowserRouter>   
    </div>
  );
}

export default App;
