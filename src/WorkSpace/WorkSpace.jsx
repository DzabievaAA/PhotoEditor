import React, {useRef, useState}  from 'react';
import styles from '../WorkSpace/WorkSpace.module.css'
import Sliders_RGB from '../Sliders_RGB/Sliders_RGB';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Container, Nav, Tab, Row, Col } from 'react-bootstrap';
import Sliders_contrast from '../Sliders_contrast/Sliders_contrast';
  let originalData;
  let origRedChanel;
  let origGreenChanel;
  let origBlueChanel;
  let origAlfaChanel;
  let currentChanelRed;
  let currentChanelGreen;
  let currentChanelBlue;
  let currentChanelAlfa;
  let imageWidth;
  let imageHeight;
function WorkSpace ({mode, setMode} ) {
  const inputRef = useRef(null);
  const canvasRef = useRef(null);
  
//разбиваем канвас на каналы
  function initChanel() {
    let cnvs = canvasRef.current;
    origRedChanel = new Uint8ClampedArray(imageWidth * imageHeight);
    origGreenChanel = new Uint8ClampedArray(imageWidth * imageHeight);
    origBlueChanel = new Uint8ClampedArray(imageWidth * imageHeight);
    origAlfaChanel = new Uint8ClampedArray(imageWidth * imageHeight);
    for (var i = 0; i < originalData.length; i += 4) {
      origRedChanel[i / 4] = originalData[i];
      origGreenChanel[i / 4] = originalData[i+1];
      origBlueChanel[i / 4] = originalData[i+2];
      origAlfaChanel[i / 4] = originalData[i+3];
    }
    currentChanelRed =[...origRedChanel];
    currentChanelGreen = [...origGreenChanel];
    currentChanelBlue = [...origBlueChanel];
    currentChanelAlfa = [...origAlfaChanel];
  };
  function Gauss () {
   let currentGaussRed = [...currentChanelRed];
   let currentGaussGreen = [...currentChanelGreen];
   let currentGaussBlue = [...currentChanelBlue];
    // y = [...x];
    // for(...)
    // {
    //   y = x*2;
    // }

    // x = y
    for (let i = 0; i < currentChanelRed.length; i++) {
      let ignore = i < imageWidth || i > imageWidth*imageHeight - imageWidth;
      let column = i % imageWidth;
      ignore = ignore || column === 0 || column === imageWidth - 1;
      if(ignore){
        continue;
      }
      currentGaussRed[i] = ((currentChanelRed[i - imageWidth]) + (currentChanelRed[i + imageWidth]) + 
                            (currentChanelRed[i - 1]) + (currentChanelRed[i + 1]) + 
                            currentChanelRed[i - imageWidth - 1] + currentChanelRed[i - imageWidth + 1] +
                            (currentChanelRed[i + imageWidth - 1]) + (currentChanelRed[i + imageWidth + 1]) +
                            (currentChanelRed[i] ))/9;

      currentGaussGreen[i] = ((currentChanelGreen[i - imageWidth]) + (currentChanelGreen[i + imageWidth]) + 
                            (currentChanelGreen[i - 1]) + (currentChanelGreen[i + 1]) + 
                            currentChanelGreen[i - imageWidth - 1] + currentChanelGreen[i - imageWidth + 1] +
                            (currentChanelGreen[i + imageWidth - 1]) + (currentChanelGreen[i + imageWidth + 1]) + (currentChanelGreen[i] ))/9;

      currentGaussBlue[i] = ((currentChanelBlue[i - imageWidth]) + (currentChanelBlue[i + imageWidth]) + 
                            (currentChanelBlue[i - 1]) + (currentChanelBlue[i + 1]) + 
                            currentChanelBlue[i - imageWidth - 1] + currentChanelBlue[i - imageWidth + 1] +
                            (currentChanelBlue[i + imageWidth - 1]) + (currentChanelBlue[i + imageWidth + 1]) + (currentChanelBlue[i] ))/9;
    }
    currentChanelRed = currentGaussRed;
    currentChanelGreen = currentGaussGreen;
    currentChanelBlue = currentGaussBlue;
    renderImage();
  }
  function renderImage() {
    let cnvs = canvasRef.current;
    let ctx = cnvs.getContext('2d');
    let collectedImageData = new Uint8ClampedArray((imageWidth * imageHeight)*4);
    for (let i = 0; i < currentChanelRed.length; i++) {
      collectedImageData[i *4 ] = currentChanelRed[i];
      collectedImageData[i*4 + 1] = currentChanelGreen[i];
      collectedImageData[i*4 + 2] = currentChanelBlue[i];
      collectedImageData[i*4 + 3] = currentChanelAlfa[i]; 
    }
    let imgData = new ImageData( imageWidth, imageHeight);
    imgData.data.set(collectedImageData);
    var ratioX = cnvs.width / imageWidth;
          var ratioY = cnvs.height / imageHeight;
          var ratio = Math.min(ratioX, ratioY);
          ctx.putImageData(imgData, 0, 0,0,0, imageWidth * ratio, imageHeight * ratio);
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
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
          var ratioX = canvas.width / imgNew.naturalWidth;
          var ratioY = canvas.height / imgNew.naturalHeight;
          var ratio = Math.min(ratioX, ratioY);
          ctx.drawImage(imgNew, 0, 0, imgNew.naturalWidth * ratio, imgNew.naturalHeight * ratio);
          imageWidth = imgNew.width;
          imageHeight = imgNew.height;
          originalData = new Uint8ClampedArray(ctx.getImageData(0, 0, imageWidth, imageHeight).data);
          initChanel();
          renderImage();
        }
        imgNew.src = reader.result;
      }
      reader.readAsDataURL(file);
    }
  }
  
  // Функции для RGB изменений
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
//Функция для контраста
  function onRangeCntrst(e) {
    for (var i = 0; i < currentChanelRed.length; i++) {
      currentChanelAlfa[i] = origAlfaChanel[i]  * e;
    }
      renderImage()
  }
    

  //Загрузка изображения на компьютер
    function download(){
      let cnvs = canvasRef.current
      var download = document.getElementById("download");
      var image = cnvs.toDataURL("image/png")
                  .replace("image/png", "image/octet-stream");
      download.setAttribute("href", image);
 }
  //отрисовка слайдеров и закрытие на "крестик"
  let slidersRBG, slidersCntrst;
  if(mode == "RGB") {
    slidersRBG =  <Sliders_RGB  className={styles.sliders} 
  onRangeRed={onRangeRed}
  onRangeGreen={onRangeGreen} 
  onRangeBlue={onRangeBlue} 
  setMode={setMode} />;
  } else if (mode == "CNTRST") {
    slidersCntrst = <Sliders_contrast onRangeCntrst={onRangeCntrst} setMode={setMode}/>
  }
  else if (mode == "NONE") {
    slidersRBG = null;
  }


  return (<div>
      <Container>
      <Tab.Container id="ledt-tabs-example">
        <Row>
          <Col sm={2}>
            <Nav variant="pills" className="flex-column mt-2">
              <Nav.Item>
                <Nav.Link eventKey="first" onClick={()=>{setMode("RGB")}}> Colors Range </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second" onClick={()=>{setMode("CNTRST")}}> Contrast </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={1} className="justify-content-center">
          <input type="file" ref={inputRef}  onChange={previewFile}></input>
          </Col>
          <Col sm={6} className="justify-content-center canvas">
          <canvas  className={styles.canvas} ref={canvasRef}  ></canvas>
          </Col>
          <Col sm={2} className="justify-content-center">
            <Tab.Content>
              <Tab.Pane eventKey="first">
                {slidersRBG}
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                {slidersCntrst}
              </Tab.Pane>
            </Tab.Content>
          </Col>
          <Col sm={1}>
            <div>
              <a id="download" download="image.png">
                <button variant="dark" type="button" onClick={download}>
                  Download
                </button>
                <button variant="dark" type="button" onClick={Gauss}>
                  Gausse
                </button>
              </a>
          </div>
          </Col>
        </Row>
      </Tab.Container> 
    </Container>
    </div>
        /* <div class="container-fluid align-items-center" >
          <div className={styles.wrapperWorkSpase}>
        <div className={styles.wrapperInput}>
          <input type="file" ref={inputRef}  onChange={previewFile}></input>
        </div> 
        
         <br/>

         <div className={styles.wrapperCanvas}>
           {slider}
           <canvas className={styles.canvas}  ref={canvasRef}  ></canvas>
        </div>*/



    );
  }

  


export default WorkSpace;