import { useEffect } from 'react';
import './App.css';
import User from './components/user/User';

function App() {

  useEffect(() =>{
    fetch("http://localhost:3001/products/getProductsList")
    .then(req => req.json())
    .then(res => console.log(res))
    .catch(error => console.log(error))
  },[])

  return (
    <div className="App">
    <User/>
    </div>
  );
}

export default App;
