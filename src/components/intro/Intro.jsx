import './intro.scss'
import { init } from 'ityped';
import { useEffect, useRef } from 'react';     /* defining Hooks -> 'useRef'*/

export default function Intro() {
  
  
  const textRef = useRef();                   /* using the hook 'useRef */

  /* for text animation */

  
  useEffect(() =>  {
    init(textRef.current, { 
      //showCursor: false, 
      backDelay: 1500,
      backSpeed: 60,
      showCursor: true,
      strings: ['Frontend-Developer', 'CS-UnderGrad']
     });
  })
  

  return (
    <div className='intro' id='introId'>
      <div className="left">
        <div className="imgContainer">
          <img src="assets/laptop.png" alt="" />
        </div>
         
        
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Shatrunjay Kumar</h1>
          <h3>
            A <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolioId">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}
