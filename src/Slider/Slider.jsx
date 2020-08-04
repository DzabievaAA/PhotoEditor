import React, {useRef, useEffect} from 'react';
import style from './Slider.module.css';


function Slider () {

const thumbRef = useRef(null);
const sliderRef = useRef(null);

useEffect(() => {
    let slider = sliderRef.current;
    let thumb = thumbRef.current;
    thumb.onmousedown = function (event) {
        event.preventDefault();
        let shiftX = event.clientX - thumb.getBoundingClientRect().left;
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
        
        function onMouseMove (event) {
             let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;
                 if(newLeft < 0) {
                     newLeft = 0;
                    }
             let rightEdge = slider.offsetWidth - thumb.offsetWidth;
                 if (newLeft > rightEdge) {
                     newLeft = rightEdge;
                 }
             thumb.style.left = newLeft + 'px';
             }
            function onMouseUp() {
                 document.removeEventListener('mouseup', onMouseUp);
                 document.removeEventListener('mousemove', onMouseMove);
             }
         }
    
     thumb.ondragstart = () => {
         return false;
     };

});
    return <div>
        <div ref={sliderRef} className={style.slider}>
            <div ref={thumbRef} className={style.thumb}></div>
        </div>
    </div>
}

export default Slider;