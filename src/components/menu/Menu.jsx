import './menu.scss';

export default function Menu({menuOpen,setMenuOpen}) {
  return (
    <div className = {"menu " + (menuOpen && "active")}>    {/*if menuOpen is true, it's gonna add "active" class */}
        <ul>
            <li onClick={()=> setMenuOpen(false)}>          {/*for automatically closing the menu after clicking on any page link */}
                <a href="#introId">Home</a>
            </li>
            <li onClick={()=> setMenuOpen(false)}>
                <a href="#portfolioId">Portfolio</a>
            </li>
            <li onClick={()=> setMenuOpen(false)}>
                <a href="#worksId">Works</a>
            </li>
            <li onClick={()=> setMenuOpen(false)}>
                <a href="#testimonialsId">Testimonials</a>
            </li>
            <li onClick={()=> setMenuOpen(false)}>
                <a href="#contactId">Contact</a>
            </li>
        </ul>
    </div>
  )
}
