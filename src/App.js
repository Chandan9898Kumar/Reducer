import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homes from './Home';
import StateChanges from './RecudersComponent/IncreaseCount'
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route  exact path='/' element={<Homes />} />
        <Route   exact path='/StateChange'  element={<StateChanges />}                                   />
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
