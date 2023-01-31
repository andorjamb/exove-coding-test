import { useState, useEffect, useRef } from 'react';
import './App.css';
/**
 * 1C. Create a slider in react
Have its value stored in state
Have it fire an event with the value
Have it fire the event only when the user has stopped moving it
 */


function App() {

  const [slider, setSlider] = useState(0);
  const sliderThumb = useRef();

  const slideHandler = () => {
    setSlider(sliderThumb.current.value);
  }

  const blurHandler = () => {
    console.log('stopped');
  }

  useEffect(() => {

  }, [slider])

  return (
    <div className="App">
      <header className="header"><h1>Slider React App</h1></header>
      <div className="container">
        <div className="display">{slider}</div>
        <label htmlFor='slider'></label>
        <input type="range" className="slider" min="0" max="50" defaultValue={slider} id="slider" name="slider" onMouseUp={blurHandler} onInput={slideHandler} ref={sliderThumb} />
      </div>
    </div>
  );
}

export default App;
