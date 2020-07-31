import React from 'react';
import style from './canvas.module.css';


function Canvas() {
  return (
    <div>
      <canvas className={style.canvas} id="canvas"></canvas>  
    </div>
  );
}

export default Canvas;