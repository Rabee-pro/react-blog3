import "./settings.css"
import Sidebar from "../../componets/sidebar/Sidebar"

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTittle">
          <span className="settingsUpdateTitle">Update your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>

        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img 
            src="https://th.bing.com/th/id/R.3a9f0210ff7d1e83039ff237c81bacae?rik=asArcL6qvWfZfA&riu=http%3a%2f%2fs1.picswalls.com%2fwallpapers%2f2016%2f03%2f29%2fbeautiful-nature-high-definition_042323787_304.jpg&ehk=8tO7UxFL%2bC03x6vfc2O9EhdUCe4fl6tC7UGUdlnpdX4%3d&risl=&pid=ImgRaw&r=0" 
            alt="" />
            <label htmlFor="fileInput">
            <i className=" settingsPPIcon fa-regular fa-circle-user"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}}/>
          </div>
           <label >Username</label>
           <input type="text" placeholder="enter your Name" />
           <label >Email</label>
           <input type="email" placeholder="Enter your EmailId" />
           <label >Password</label>
           <input type="password"  />
           <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar/>

    </div>
  )
}