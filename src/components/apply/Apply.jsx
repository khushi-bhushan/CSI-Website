import { Link } from 'react-router-dom';
export default function Post() {
  return (
    <div className="post">
        <img className="postImg"
        src="2n.jpg" alt="" />
        <div className="postInfo">
            <span className="postTitle">
            <Link to="Apply1"> <a href="applyy.png"> </a>How to apply</Link>
            </span>
            <hr/>
        </div>
        <p className="postDesc">
        We always welcome all the keen learners and explorers
        </p>
    </div>
  );
}
