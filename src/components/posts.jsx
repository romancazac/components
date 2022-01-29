import React from "react";

function Posts(props){
    
    return(
        <div className="wrapper__counter">
            <div className="post__row">
                <div className="post__name">
                    {props.postss.id}.
                    {props.postss.title}
                    <p>{props.postss.body}</p>
                </div>
                <div>
                    <button className="post__btn">Delet</button>
                </div>
            </div>
        </div>
    )
}
export default Posts;