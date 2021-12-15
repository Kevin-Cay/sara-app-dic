import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import CalendarCard from './components/CalendarCard';
import CitaView from './components/CitaView';


function App() {
  return (
    <div className="App  ">
      <Navbar />
      <Header />
      <CalendarCard id="calendar" />
      <CitaView />
    </div>
  );
}

export default App;
