import React, {useRef}  from 'react';


function WorkSpace () {
  const input = useRef(null);

  function previewFile() {
    let canvas = document.querySelector('canvas');
    if( input.current !== null ){
      let file = input.current.files[0];
      let reader  = new FileReader();
      reader.onloadend = () => {
        let img = new Image();
        let ctx = canvas.getContext("2d");
        img.onload = () => {
          ctx.drawImage(img, 0, 0);
        }
        img.src = reader.result;
      }
      reader.readAsDataURL(file);
    }
  }
  
    return ( <div>
        <input type="file" ref={input}  onChange={ () => {
          previewFile();
        }}></input>
        <canvas width="800" height="800"></canvas>
      </div>
    );
  }

  


export default WorkSpace;