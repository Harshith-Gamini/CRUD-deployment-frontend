import Navbar from './components/Navbar';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { HashRouter,Route,Routes } from 'react-router-dom';
import CreateStudent from './components/CreateStudent';
import StudentList from './components/StudentList';
import EditStudent from './components/EditStudent';

function App() {
  return (
    <div class="container">
      <HashRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<CreateStudent/>}/>
          <Route path="/create-student" element={<CreateStudent/>}/>
          <Route path="/student-list" element={<StudentList/>}/>          
          <Route path="/edit-student/:id" element= {<EditStudent/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
