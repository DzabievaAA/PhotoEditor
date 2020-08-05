import React, {useRef, useEffect}  from 'react';


function WorkSpace () {
  const inputRef = useRef(null);
  const canvasRef = useRef(null);
  function previewFile() {
    let input = inputRef.current;
    let canvas = canvasRef.current;
    if( input !== null ){
      let file = input.files[0];
      let reader  = new FileReader();
      reader.onloadend = () => {
        let imgNew = new Image();
        let ctx = canvas.getContext("2d");
        imgNew.onload = () => {
          ctx.drawImage(imgNew, 0, 0);
        }
        imgNew.src = reader.result;
      }
      reader.readAsDataURL(file);
    }
  }
  
    function onClick (e) {
      let cnvsRed = canvasRef.current;
      let ctxRed = cnvsRed.getContext('2d');
      let imgData = ctxRed.getImageData(0, 0, cnvsRed.width, cnvsRed.height);
      for (var i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] = 255 - imgData.data[i];
        imgData.data[i + 1] = 255 - imgData.data[i + 1];
        imgData.data[i + 2] = 255 - imgData.data[i + 2];
        imgData.data[i + 3] = 255;
      }
      
      ctxRed.putImageData(imgData, 0, 0);
    }
  
    return ( <div>
        <input type="file" ref={inputRef}  onChange={previewFile}></input>
        <canvas  ref={canvasRef} width="800" height="800"></canvas>
        <div>
    <button onClick={onClick}>Red</button>
</div>
      </div>
    );
  }

  


export default WorkSpace;