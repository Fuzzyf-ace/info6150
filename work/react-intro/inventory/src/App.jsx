
import './App.css';
import { useState } from 'react';
import Reorder from './Reorder';
// index.css is automatically imported

function App() {
  const [count, setCount] = useState(5);
  const onReorder = () => {
    setCount(5);
  };
  return (
    <div className="app">
      <header className='header '>Inventory</header>
      <main className='main'>
          <h1 className='heading'>The count is: {count}</h1> 
          <div className='buttons'>
            <button type='button' className='buttons--increase' disabled={!count} onClick={()=>{
              setCount(count + 1);
            }}>Increase</button>
            <button type='button' className='buttons--decrease' disabled={!count} onClick={()=>{
              setCount(count - 1);
            }}>Decrease</button>
            { (count===0) && <Reorder onReorder={onReorder}/> }
          </div>
      </main>
      <footer className='footer'>This is a footer</footer> 

    </div>
  );
}

export default App;
