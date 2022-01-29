import React from "react";
import Posts from "./posts";

function PostList({post, title}){
    return(
        <div>
            <h2>{title}</h2>
            {post.map(postss =>
                <Posts postss={postss} key={postss.id}/>
        
            )}
        </div>
    )
}
export default PostList;