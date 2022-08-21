import "./post.css";
export default function Post() {
  return (
    <div className="post">
        <img className="postImg"
        src="mission.png" alt="" />
        <div className="postInfo">
            <span className="postTitle">
              <a href="first.png">Defined Goals</a>
            </span>
            <hr/>
        </div>
        <p className="postDesc">
        Mentorship matters,a mentor helps navigate the 
        complexities of life and find the best path based 
        on your long term goals.
        </p>
    </div>
  );
}
