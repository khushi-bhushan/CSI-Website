import "./sidebar.css"
export default function Sidebar() {
  return (
    <div className="sidebar">
       <div className="sidebarItem">
         <span className="sidebarTitle">ABOUT US</span>
           <img src="logo.jpg"  alt=""/>
             <p>
             Computer Society of India is a body of computer professionals in India. 
             CSI body launched one of it's chapters in CCEW. CSI recognizes innovations and
             indigenous developments in the field of information technology in India. 
              </p>
      </div>
      <div className="sidebarItem">
         <span className="sidebarTitle">WHAT WE DO</span>
         <ul className="sidebarList">
            <li className="sidebarListItem">Events</li>
            <li className="sidebarListItem">Workshops</li>
            <li className="sidebarListItem">Innovations</li>
            <li className="sidebarListItem">Creativity</li>
            <li className="sidebarListItem">Teamwork</li>
            <li className="sidebarListItem">Hands-On</li>
         </ul>
       </div>
       <div className="sidebarItem">
       <span className="sidebarTitle">FOLLOW US</span>
       <div className="sidebarSocial">
       <a href="https://www.facebook.com/people/Csi-Ccoew/100080779934439/"><i className="topIcon fa-brands fa-facebook-square"></i></a>
       <a href='https://twitter.com/csiccoew?t=48czNsttXuaXfloCQKTs_A&s=09'><i className="topIcon fa-brands fa-twitter-square"></i></a>
      <a href='https://instagram.com/csi_ccoew?igshid=YmMyMTA2M2Y='><i className="topIcon fa-brands fa-instagram-square"></i></a>
       </div>
       </div>
       
    </div>
  );
}
/*

*/