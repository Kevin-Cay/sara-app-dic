import {Routes, Route} from 'react-router-dom';
import Home from './views/Home';
import CitaView from './views/CitaView';
import CalendarView from './views/CalendarView';
import Navbar from './components/Navbar';


function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/cita' element={<CitaView />} />
        <Route path="/calendario" element={<CalendarView />} /> 
      </Routes>
    </div>
  );
}

export default App;
