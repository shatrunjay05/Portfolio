import './portfolioList.scss';

export default function PortfolioList({id,title, active, setSelected   }) {
  return <li className={active ? "portfolioList active" : "portfolioList"} 
  onClick={()=> setSelected(id)}>
    {title} 
  </li>
   
    /*if it's active then it's gonna be portfolioList and active 
    if not -> then it's gonna be just portfolioList */
  
}
