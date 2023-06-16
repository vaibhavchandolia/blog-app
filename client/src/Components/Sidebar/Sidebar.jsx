import "./Sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img className="sidebarImg" src="https://images.unsplash.com/photo-1577735478233-f27f7fd3ec68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80" 
            alt="" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Mollitia quae tenetur, vitae, exercitationem possimus 
                doloremque dolor eveniet eos assumenda nihil nostrum asperiores magnam. 
                Mollitia nulla ad modi, iste ex sint!
            </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Cinema</li>
                <li className="sidebarListItem">Tech</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
            <i  className="sidebarIcon fa-brands fa-square-facebook"></i>
            <i  className="sidebarIcon fa-brands fa-square-twitter"></i>
            <i  className="sidebarIcon fa-brands fa-square-pinterest"></i>
            <i  className="sidebarIcon fa-brands fa-square-instagram"></i>
            </div>
        </div>
    </div>
  )
}
