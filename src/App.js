import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { AppRouter } from './App.router';


function App() {
  return (
    <div > 
    
      <BrowserRouter>
  <AppRouter></AppRouter>
      </BrowserRouter>
    </div>
  );
}

export default App;
