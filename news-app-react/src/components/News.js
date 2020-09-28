import React from "react";

const News = ({postData}) => {
  return (
    <li className='news'>
      <h3><a href={postData.url} target="blank">{postData.title}</a></h3>
      <p><span className="sub-text">Posted by: {postData.author} || Likes:{postData.points} || Date: {postData.created_at}</span></p>
    </li>
  );
};

export default News;