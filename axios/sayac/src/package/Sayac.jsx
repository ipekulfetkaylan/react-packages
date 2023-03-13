import React from 'react';
import "./sayac.css";
import CountUp,{useCountUp} from 'react-countup';


export default function Sayac() {
    const countUpRef = React.useRef(null);
    const { start, pauseResume, reset, update } = useCountUp({
        ref: countUpRef,
        start:0, 
        end:50,
        duration: 5
    })

  return (
    <div className='sayac'>
        <div className="kutular">
            <div className="kutu kutu1">{<CountUp end={100} duration={5} delay={3}/>}</div>
            <div className="kutu kutu2" ref={countUpRef}>0</div>
            <div className="kutu kutu3">{<CountUp end={500} duration={1} prefix="&#8378;" suffix="TL"/>}</div>
        </div>
        <div className="butonlar">
            <button onClick={start}>Start</button>
            <button onClick={pauseResume}>Pause</button>
            <button onClick={reset}>Reset</button>
            <button onClick={() =>update(100)}>Update</button>
            {/* update etmek için bir update noktası vermek için */}
        </div>
      
    </div>
  )
}
