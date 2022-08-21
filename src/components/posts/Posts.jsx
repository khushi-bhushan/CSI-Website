import "./posts.css"
import Post from "../post/Post";
import Team from  "../team/Team"
import Programs from "../programs/Programs"
import Apply from "../apply/Apply"
export default function Posts() {
  return (
    <div className="posts">
     <Post/>
     <Programs/>
     <Team/>
     <Apply/>
    </div>
  )
}
