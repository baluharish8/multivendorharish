import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { AppRouter } from './App.router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';

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
