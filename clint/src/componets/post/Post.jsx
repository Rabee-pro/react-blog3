import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img className="postImg" 
        src="https://jooinn.com/images/cute-little-girl-3.jpg" alt="" />

        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
          </div>

          <span className="postTitle">Lorem ipsum dolor sit amet.</span>
          <hr />
          <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Dolorum at totam aperiam? Similique et ad nostrum in impedit 
           saepe facilis vitae sequi tempora vero odio, id iure, 
           animi possimus tempore?
        </p>
    </div>
  )
}