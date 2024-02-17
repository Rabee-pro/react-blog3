import Sidebar from "../../componets/sidebar/Sidebar"
import SinglePost from "../../componets/singlePost/SinglePost"
import "./single.css"

export default function Single() {
  return (
    <div className="single">
      <SinglePost/>
        <Sidebar/>
    </div>
  )
}