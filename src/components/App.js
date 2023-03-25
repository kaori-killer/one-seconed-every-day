import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'routes/Home';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
          <Routes>
            <Route>
              <Route path="/" element={<Home />} />
            </Route>
          </Routes>
      </div>    
    </BrowserRouter>
  );
}

export default App;
