import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="https://jooinn.com/images/cute-little-girl-3.jpg" alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Eveniet ipsa tempore maxime quis. 
        </p>
      </div>

      <div className="sidebarItem">
         <span className="sidebarTitle">CATEGORIES</span>
         <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Cinema</li>
         </ul>
      </div>

      <div className="sidebarItem">
         <span className="sidebarTitle">FOLLOW US</span>
         <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-square-facebook"></i>
            <i className="sidebarIcon fa-brands fa-square-twitter"></i>
            <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
            <i className="sidebarIcon fa-brands fa-square-instagram"></i>
         </div>
      </div>
      
    </div>
  )
}