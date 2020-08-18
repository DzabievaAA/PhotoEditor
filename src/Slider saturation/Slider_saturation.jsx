import React, {useEffect, useRef} from 'react';
import style from './Slider_saturation.module.css';

function Slider_saturation ( { onRangeChange,Max} ) {

  const max = 2;
  const inputRef = useRef(null);
  const paragraphRef = useRef(null);
  useEffect(()=>{
    let input = inputRef.current;
    let paragraph = paragraphRef.current;
    input.addEventListener("input", function() {
      paragraph.innerHTML =  input.value * max / 100;
      onRangeChange(input.value * max / 100);
  }, false); 
  })
    return <div className={style.slider_wrapper}>
  <input ref={inputRef} type="range" min="0" max={Max} step="1" list="tickmarks"></input>
  <datalist className={style.tickmarks} id="tickmarks">
  <option value="0" label="0"></option>
  <option value="1" label="1"></option>
  <option value="2" label="2"></option>
  </datalist>
  <p ref={paragraphRef}></p>
</div>
}
export default Slider_saturation;