import React, {useRef}  from 'react';
import Slider_saturation from '../Slider saturation/Slider_saturation';
import styles from '../WorkSpace/WorkSpace.module.css'

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
  
    function onRangeRed (e) {
      for (var i = 0; i < currentChanelRed.length; i++) {
        currentChanelRed[i] = origRedChanel[i]  * e;
      }
      renderImage()
    }
    function onRangeGreen (e) {
      for (var i = 0; i < currentChanelGreen.length; i++) {
        currentChanelGreen[i] = origGreenChanel[i]  * e;
      }
      renderImage()
    }
    function onRangeBlue (e) {
      for (var i = 0; i < currentChanelBlue.length; i++) {
        currentChanelBlue[i] = origBlueChanel[i]  * e;
      }
      renderImage()
    }
    function download(){
      let cnvs = canvasRef.current
      var download = document.getElementById("download");
      var image = cnvs.toDataURL("image/png")
                  .replace("image/png", "image/octet-stream");
      download.setAttribute("href", image);

  }
    return ( <div className={styles.wrapperWorkSpase}>
        <div className={styles.wrapperInput}>
          <input type="file" ref={inputRef}  onChange={previewFile}></input>
        </div>

        <div className={styles.wrapperCanvas}>
        <canvas  ref={canvasRef}  ></canvas>
        </div>
<div><a id="download" download="image.png"><button type="button" onClick={download}>Download</button></a></div>
      
        <div className={styles.wrapperSliders}>
          <div>
          <Slider_saturation callBack={onRangeRed}/>
          </div>
          <div>
          <Slider_saturation callBack={onRangeGreen}/>
          </div>
          <div>
          <Slider_saturation callBack={onRangeBlue}/>
          </div>
        </div>
      </div>
    );
  }

  


export default WorkSpace;