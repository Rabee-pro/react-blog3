import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePosteWrapper">
        <img src="https://jooinn.com/images/cute-little-girl-3.jpg" alt="" className="singlePostImg" />
      </div>

      <h1 className="singlePostTitle">Lorem ipsum dolor sit amet 
      <div className="singlePostEdit">
          <i className=" singlePostIcon fa-regular fa-pen-to-square"></i>
          <i className="singlePostIcon fa-solid fa-trash-can"></i>
      </div>
      </h1>

      <div className="singlePostInfo">
        <span className="singlePostAuthor">Autor: <b>rabee</b></span>
        <span className="singlePostDate">1 hour ago</span>
      </div>

      <p className="singlePostDesc">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Incidunt ipsa sequi fuga aspernatur ex maxime illum consectetur
          delectus voluptas veritatis libero eos minus neque autem 
          obcaecati nulla, maiores atque debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Incidunt ipsa sequi fuga aspernatur ex maxime illum consectetur
          delectus voluptas veritatis libero eos minus neque autem 
          obcaecati nulla, maiores atque debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Incidunt ipsa sequi fuga aspernatur ex maxime illum consectetur
          delectus voluptas veritatis libero eos minus neque autem 
          obcaecati nulla, maiores atque debitis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Incidunt ipsa sequi fuga aspernatur ex maxime illum consectetur
          delectus voluptas veritatis libero eos minus neque autem 
          obcaecati nulla, maiores atque debitis.
      </p>
      
      </div>
  )
}