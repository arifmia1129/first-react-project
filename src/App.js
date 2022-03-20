import './App.css';
import Menubar from './components/Menubar/Menubar';
// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Products from './components/Products/Products';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  }
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App">
      <Menubar count={count}></Menubar>
      <Products increase={increaseCount}></Products>
    </div>
  );
}

export default App;
