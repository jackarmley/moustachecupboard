import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <img className="logo" src={process.env.PUBLIC_URL + '/logo.png'} alt="Moustache Cupboard" />
  );
}

export default App;
