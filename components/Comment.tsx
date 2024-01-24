import React from 'react';

interface CommentProps {
    author: string;
    content: string;
}

const Comment: React.FC<CommentProps> = ({ author, content }) => {
    return (
        <div className="comment">
            <h3>{author}</h3>
            <p>{content}</p>
        </div>
    );
};

export default Comment;
