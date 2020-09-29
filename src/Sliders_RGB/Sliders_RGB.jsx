import React, {useEffect} from 'react';
import Slider from "../Slider/Slider";
import styles from '../Sliders_RGB/Sliders_RGB.module.css'
import { Container, Row, Col } from 'react-bootstrap';
import imgsxrv from '../img/kisspng-x-mark-check-mark-clip-art-wrong-sign-5b12e998675839.8614187915279661044233 (1).png'

function Sliders_RGB ({onRangeRed, onRangeGreen, onRangeBlue,setMode }) {
  // useEffect(() => {
  //   if (isLoggedIn) {
  //     return <Sliders />;
  //   }
  //   return null;
  // });
    return <Container className={styles.wrapperSliders}>
      <Row>
        <p className={styles.RGB_names}>
          Red
        </p>
          <Slider onRangeChange={onRangeRed}/>
      </Row>
      <Row>
      <p className={styles.RGB_names}>
          Green
        </p>
          <Slider onRangeChange={onRangeGreen}/>
      </Row>
      <Row>
      <p className={styles.RGB_names}>
          Blue
        </p>
          <Slider onRangeChange={onRangeBlue}/>
      </Row>


        <img onClick={()=>{setMode("NONE")}} src={imgsxrv} height="40px" width="40px" alt=""/>


    </Container>
//       <div className={styles.wrapperSliders}>
//         <div>
//           <Slider_saturation onRangeChange={onRangeRed}/>
//         </div>

//         <div>
//           <Slider_saturation onRangeChange={onRangeGreen}/>
//         </div>

//         <div>
//           <Slider_saturation onRangeChange={onRangeBlue}/>
//         </div>

//         <div>
//           <img onClick={()=>{setMode("NONE")}} src={imgsxrv} height="40px" width="40px" alt=""/>
//         </div>
//       </div>

      
//   </div>
 }

export default Sliders_RGB;