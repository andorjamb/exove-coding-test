import { useState, useRef } from 'react';
import './App.css';

function App() {

  const [slider, setSlider] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const sliderThumb = useRef();
  const displayDiv = useRef();

  const slideHandler = () => {
    setSlider(+sliderThumb.current.value);
  }

  const mouseUpHandler = () => {
    setOpacity(slider / 100);
  }

  return (
    <div className="App">
      <header className="header"><h1>Slider React App</h1></header>
      <div className="container">
        <h3>Use the slider to set the circle's opacity</h3>
        <div className="display" style={{ opacity: opacity }} ref={displayDiv}><h2 className="display_h2">{slider}%</h2></div>
        <label htmlFor='slider'></label>
        <input type="range" className="slider" min="0" max="100" defaultValue={slider} id="slider" name="slider" onMouseUp={mouseUpHandler} onInput={slideHandler} ref={sliderThumb} />
      </div>
    </div>
  );
}

export default App;
