import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './views/Home';
import Navbar from './components/Navbar';
import CalendarCard from './components/CalendarCard';
import CitaView from './views/CitaView';


function App() {
  return (
    <div className="App  ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/cita' element={<CitaView />} />
       <Route path="/calendario" element={<CalendarCard />} /> 
      </Routes>
    </div>
  );
}

export default App;
