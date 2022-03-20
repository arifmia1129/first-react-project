import './App.css';
import Menubar from './components/Menubar/Menubar';
// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  }
  return (
    <div className="App">
      <Menubar count={count}></Menubar>
    </div>
  );
}

export default App;
