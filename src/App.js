import './App.scss';
import NavbarTop from './components/NavbarTop/NavbarTop';
import NavbarBottom from './components/NavbarBottom/NavbarBottom';
import Landing from './components/Landing/Landing';

function App() {
  return (
    <div className="App">
      <NavbarTop></NavbarTop>
      <Landing></Landing>
      <NavbarBottom></NavbarBottom>
    </div>
  );
}

export default App;
