import React from "react";

const CommentDetail = ({ author, timeAgo, text, avatar }) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={avatar} />
            </a>
            <div>
                <a href="/" className="author">
                    {author}
                </a>
                <div className="metadata">
                    <span className="date">{timeAgo}</span>
                </div>
                <div className="text">{text}</div>
            </div>
        </div>
    );
};

export default CommentDetail;
