import React, {useEffect} from 'react';
import Slider from "../Slider/Slider";
import { Container, Row, Col } from 'react-bootstrap';
import imgsxrv from '../img/kisspng-x-mark-check-mark-clip-art-wrong-sign-5b12e998675839.8614187915279661044233 (1).png'

function Sliders_contrast({setMode, onRangeCntrst}) {
    return <Container>
        <Row>
            <Slider onRangeChange={onRangeCntrst} />
        </Row>
        <Row>
        <img onClick={()=>{setMode("NONE")}} src={imgsxrv} height="40px" width="40px" alt=""/>
        </Row>
    </Container>
}

export default Sliders_contrast;