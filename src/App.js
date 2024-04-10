
import './App.css';
import LandingPage from './Components/LandingPage/LandingPage';
import Navbar from './Components/Navbar/Navbar';
import TestIntegration from './test';
import API_URL from './config';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      
    </div>
  );
}

export default App;
