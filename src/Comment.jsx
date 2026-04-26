import { useState } from "react";
import "./Comment.css";
import CommentsForm from "./CommentsForm";

export default function Comment() {

    const [comments, setComments] = useState([
        {
            id: 1,
            username: "ks",
            remarks: "great",
            rating: 4
        }
    ]);

    const addNewComment = (comment) => {
        setComments((currComments) => [...currComments, comment]);
    };

    return (
        <>
            <div>
                <h3>All Comments</h3>

                {comments.map((comment) => (
                    <div className="comment" key={comment.id}>
                        <span>{comment.remarks}</span>
                        &nbsp;
                        <span>(rating = {comment.rating})</span>
                        <p>- {comment.username}</p>
                    </div>
                ))}
            </div>

            <hr />

            <CommentsForm addNewComment={addNewComment} />
        </>
    );
}