import { useEffect, useState } from 'react';
import PortfolioList from '../portfolioList/PortfolioList';
import './portfolio.scss'
import { 
  contentPortfolio, 
  designPortfolio, 
  featuredPortfolio, 
  mobilePortfolio, 
  webPortfolio 
  } from '../../data';

export default function Portfolio() {

  const[data, setData] = useState([]);
  const[selected, setSelected] = useState("featured")           //for making the active and unactive feature

  const list = [            //for the portfolio window
    {
      id: 'featured',
      title: 'Featured',
    },
    {
      id: 'web',
      title: 'Web App',
    },
    {
      id: 'mobile',
      title: 'Mobile App',
    },
    {
      id: 'design',
      title: 'Design',
    },
    {
      id: 'content',
      title: 'Content',
    },
  ];

  useEffect(()=>{

    //switch case structure
    switch(selected){
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default: 
      setData(featuredPortfolio);
      break;

    }


  }, [selected])

  return (
    <div className='portfolio' id='portfolioId'>
      <h1>Portfolio</h1>
      <ul>
          {list.map((item) => (
            <PortfolioList 
              title = {item.title}  
              active={selected === item.id} 
              setSelected = {setSelected}
              id={item.id}
            />
            //if selected equals itemID then setSelected
          ))}
      </ul>
      <div className="container">
        {data.map((d) => (

          <div className="item">
            <img 
            src={d.img} 
            alt=''
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
