import React, {useEffect} from 'react';
import Slider from "../Slider/Slider";
import { Container, Row, Col } from 'react-bootstrap';
import imgsxrv from '../img/kisspng-x-mark-check-mark-clip-art-wrong-sign-5b12e998675839.8614187915279661044233 (1).png'

function Sliders_RGB ({onRangeRed, onRangeGreen, onRangeBlue,setMode }) {
  // useEffect(() => {
  //   if (isLoggedIn) {
  //     return <Sliders />;
  //   }
  //   return null;
  // });
    return <Container>
      <Row>
          Red
          <Slider onRangeChange={onRangeRed}/>
      </Row>
      <Row>
          Green
          <Slider onRangeChange={onRangeGreen}/>
      </Row>
      <Row>
          Blue
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