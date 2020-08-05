import React, {useEffect, useRef} from 'react';
import style from './Slider.module.css';

function Slider () {
    const inputRef = useRef(null);
    const paragraphRef = useRef(null);
    useEffect(()=>{
      let input = inputRef.current;
      let paragraph = paragraphRef.current;
      debugger;
      input.addEventListener("input", function() {
        paragraph.innerHTML =  input.value;
    }, false); 
    })
    return <div className={style.slider_wrapper}>
  <input type="range" min="0" max="2" step="0.01" list="tickmarks"></input>
  <datalist className={style.tickmarks} id="tickmarks">
  <option value="0" label="0"></option>
  <option value="1" label="1"></option>
  <option value="2" label="2"></option>
  </datalist>
</div>
}
export default Slider;