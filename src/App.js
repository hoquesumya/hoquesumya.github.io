import './App.css';
import {Components} from './components/Components'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { BrowserRouter, Routes, Route}  from 'react-router-dom'
import {Nao} from './components/Nao_Project'
import { Voting } from './components/Voting_project';

function App() {
  return (
 <div className="App container-fluid">  
    <BrowserRouter>
      <Routes>
        <Route path = '/' element={<Components></Components>}></Route>
        <Route path='/nao' element= {<Nao></Nao>}></Route>
        <Route path='/voting_ledger' element ={<Voting></Voting>}></Route>
        
      </Routes>
    </BrowserRouter>

  </div>
    
  );
}

export default App;
