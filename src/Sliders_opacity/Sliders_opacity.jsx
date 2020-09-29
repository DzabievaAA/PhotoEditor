import React, {useEffect} from 'react';
import Slider from "../Slider/Slider";
import styles from "../Sliders_RGB/Sliders_RGB.module.css"
import { Container, Row, Col } from 'react-bootstrap';
import imgsxrv from '../img/kisspng-x-mark-check-mark-clip-art-wrong-sign-5b12e998675839.8614187915279661044233 (1).png'

function Sliders_opacity({setMode, onRangeOpacity}) {
    return <Container className={styles.wrapperSliders}>
        <Row>
        <p className={styles.RGB_names}>
          Opacity
        </p>
            <Slider onRangeChange={onRangeOpacity} />
        </Row>

        <img onClick={()=>{setMode("NONE")}} src={imgsxrv} height="40px" width="40px" alt=""/>
 
    </Container>
}

export default Sliders_opacity;