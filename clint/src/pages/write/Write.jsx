import "./write.css"

export default function Write() {
  return (
    <div className="write">
      <img
      className="writeImg"
      src="https://th.bing.com/th/id/R.3a9f0210ff7d1e83039ff237c81bacae?rik=asArcL6qvWfZfA&riu=http%3a%2f%2fs1.picswalls.com%2fwallpapers%2f2016%2f03%2f29%2fbeautiful-nature-high-definition_042323787_304.jpg&ehk=8tO7UxFL%2bC03x6vfc2O9EhdUCe4fl6tC7UGUdlnpdX4%3d&risl=&pid=ImgRaw&r=0" alt="" />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
          <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{display:"none"}}/>
          <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
        </div>

        <div className="writeFormGroup">
          <textarea placeholder="Tell your story..." 
          type="text" 
          className="writeInput writeText"></textarea>
        </div>
        <button className="writeSubmit">publish</button>
      </form>
    </div>
  )
}