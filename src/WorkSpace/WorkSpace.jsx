import React, {useRef}  from 'react';
import Slider_saturation from '../Slider saturation/Slider_saturation'

function WorkSpace () {
  const inputRef = useRef(null);
  const canvasRef = useRef(null);
  let originalData;
  let origRedChanel;
  let origGreenChanel;
  let origBlueChanel;
  let currentChanelRed;
  let currentChanelGreen;
  let currentChanelBlue;
  function initChanel() {
    let cnvs = canvasRef.current;
    origRedChanel = new Uint8ClampedArray(cnvs.width * cnvs.height);
    origGreenChanel = new Uint8ClampedArray(cnvs.width * cnvs.height);
    origBlueChanel = new Uint8ClampedArray(cnvs.width * cnvs.height);
    for (var i = 0; i < originalData.length; i += 4) {
      origRedChanel[i / 4] = originalData[i];
      origGreenChanel[i / 4] = originalData[i+1];
      origBlueChanel[i / 4] = originalData[i+2];
    }
    currentChanelRed =[...origRedChanel];
    currentChanelGreen = [...origGreenChanel];
    currentChanelBlue = [...origBlueChanel];
  
  };

  function renderImage() {
    let cnvs = canvasRef.current;
    let ctx = cnvs.getContext('2d');
    let collectedImageData = new Uint8ClampedArray((cnvs.width * cnvs.height)*4);
    for (let i = 0; i < currentChanelRed.length; i++) {
      collectedImageData[i *4 ] = currentChanelRed[i];
      collectedImageData[i*4 + 1] = currentChanelGreen[i];
      collectedImageData[i*4 + 2] = currentChanelBlue[i];
      collectedImageData[i*4 + 3] = 255; 
    }
    let imgData = new ImageData( cnvs.width, cnvs.height);
    imgData.data.set(collectedImageData);
    ctx.putImageData(imgData, 0, 0);
  }



  //Вывод на canvas img после загрузки в input
  function previewFile() {
    let canvas = canvasRef.current;
    let input = inputRef.current;
    if( input !== null ){
      let file = input.files[0];
      let reader  = new FileReader();
      reader.onloadend = () => {
        let imgNew = new Image();
        let ctx = canvas.getContext("2d");
        imgNew.onload = () => {
          canvas.width = imgNew.width;
          canvas.height = imgNew.height;
          ctx.drawImage(imgNew, 0, 0);
          originalData = new Uint8ClampedArray(ctx.getImageData(0, 0, canvas.width, canvas.height).data);
          initChanel();
          renderImage();
        }
        imgNew.src = reader.result;
      }
      reader.readAsDataURL(file);
    }
  }
  
    function onClickRed (e) {
      for (var i = 0; i < currentChanelRed.length; i++) {
        currentChanelRed[i] = origRedChanel[i]  * e;
      }
      renderImage()
    }
    function onClickGreen (e) {
      for (var i = 0; i < currentChanelGreen.length; i++) {
        currentChanelGreen[i] = origGreenChanel[i]  * e;
      }
      renderImage()
    }
    function onClickBlue (e) {
      for (var i = 0; i < currentChanelBlue.length; i++) {
        currentChanelBlue[i] = origBlueChanel[i]  * e;
      }
      renderImage()
    }
    return ( <div>
        <input type="file" ref={inputRef}  onChange={previewFile}></input>
    <canvas  ref={canvasRef} width="800" height="800" ></canvas>
        <div>

    <div>
      <Slider_saturation callBack={onClickRed}/>
      </div>
      <div>
      <Slider_saturation callBack={onClickGreen}/>
      </div>
      <div>
      <Slider_saturation callBack={onClickBlue}/>
      </div>
</div>
      </div>
    );
  }

  


export default WorkSpace;