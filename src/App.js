import './App.css';
import {Components} from './components/Components'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {Cobra}  from './components/project-comp/Cobra'
import { Soccer } from './components/project-comp/Soccer';
import { Pantry } from './components/project-comp/Pantry';
import { StudyLink } from './components/project-comp/studyLink';
import { MRT } from './components/project-comp/Mrt';
import { BrowserRouter, Routes, Route}  from 'react-router-dom'
import {Nao} from './components/project-comp/Nao_Project'
import { Voting } from './components/project-comp/Voting_project';

function App() {
  return (
 <div className="App container-fluid">  
    <BrowserRouter>
      <Routes>
        <Route path = '/' element={<Components></Components>}></Route>
        <Route path='/nao' element= {<Nao></Nao>}></Route>
        <Route path='/voting_ledger' element ={<Voting></Voting>}></Route>
        <Route path='/cobra' element ={<Cobra></Cobra>}></Route>
        <Route path = '/soccer_info' element={<Soccer></Soccer>}> </Route>
        <Route path = '/my_pantry' element = {<Pantry></Pantry>}></Route>
        <Route path = '/studyLink' element={<StudyLink></StudyLink>}></Route>
        <Route path = '/mrt' element={<MRT></MRT>}></Route>

        
      </Routes>
    </BrowserRouter>

  </div>
    
  );
}

export default App;
