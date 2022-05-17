import React from 'react';
import {Link,Routes,Route} from "react-router-dom";
import './App.css';
import Main from './views/Main';
import Results from './components/Results';






function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="/product/" element={<Main/>}/>
      <Route path='/product/:id' element={<Results/>}/>
    </Routes>
    </div>
  );
}

export default App;
