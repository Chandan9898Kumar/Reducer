import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homes from './Home';
import StateChanges from './RecudersComponent/IncreaseCount'
import ReducerOnObjects from './RecudersComponent/ReducerOnObject'
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route   exact path='/' element={<Homes />} />
        <Route   exact path='/StateChange'  element={<StateChanges />}    />
        <Route   exact  path='/ObjectChange' element={<ReducerOnObjects  />}  />
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
