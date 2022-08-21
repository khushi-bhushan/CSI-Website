import { Link } from 'react-router-dom';

export default function Post() {
  return (
    <div className="post">
        <img className="postImg"
        src="team.jpg" alt="" />
        <div className="postInfo">
            <span className="postTitle">
              <a href="https://www.instagram.com/csi_ccoew/?igshid=YmMyMTA2M2Y%3D">Meet the Team</a>
            </span>
            <hr/>
        </div>
        <p className="postDesc">
       We have a planist of keen members 
       who always look forward to help other.
        </p>
    </div>
  );
}
