import { useState } from 'react';
import './works.scss'

export default function Works() {
  /* useState */
  const [currentSlide, setCurrentSlide] = useState(0);   //useState Hook

  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Web Design",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Mobile Application",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Branding",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];

  const handleClick = (way)=>{
    /* if way is left, set currentSlide */
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) :
    setCurrentSlide(currentSlide < data.length-1 ? currentSlide+1 : 0)
    
    /* 
    /data.length = 3
    if currentSlide is > 0 means if it's already first slide then we can't move,  so go for last one; 
    AND if all this not then for RIGHT move -->
    If currentSlide is less than '2' then +1 slide
    when currentSlide == '2' then don't increase ... make it '0';
    */
  }

  return (
    <div className='works' id='worksId'>
      {/* for making the left right arrow work */}
      <div className="slider" style={{transform:`translateX(-${currentSlide *100}vw)`}}>     
        {data.map((d) => (

        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={d.icon} alt="" />
                </div>
                <h2>{d.title}</h2>
                <p>
                  {d.desc}
                </p>
                <span>
                  Projects
                </span>
              </div>
            </div>
            <div className="right">
            <img
                  src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                  alt=""
            />
            </div>
          </div>
        </div>
        ))  
      }
        
      </div>
      <img src="assets/arrow.png" className='arrow left' alt="" onClick={()=> handleClick("left")}/>
      <img src="assets/arrow.png" className='arrow right' alt="" onClick={()=> handleClick()} />
    </div>
  )
}
