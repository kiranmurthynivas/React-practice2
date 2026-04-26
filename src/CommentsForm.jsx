import { useState } from "react"

export default function CommentsForm({addNewComment}) {

    let [FormData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: 5
    });

    let handelInputChange = (event) => {
        setFormData((currData) => {
            return {...currData , [event.target.name]: event.target.value};
        })
    }

    let handelSubmit = (event) => {
        addNewComment(FormData);
        event.preventDefault();
        setFormData({
            username: "",
            remarks: "",
            rating: 5
        });
    }

    return (
        <div>
            <h3>Give a comment!</h3>
            <form onSubmit={handelSubmit}>
                <label htmlFor="username">Enter Username</label> &nbsp;
                <input placeholder="username" type="text" value={FormData.username} onChange={handelInputChange} id="username" name="username"/>
                <br/><br/>
                <label htmlFor="remarks">Add Remarks</label>&nbsp;
                <textarea placeholder="add fewnremarks" value={FormData.remarks} onChange={handelInputChange} id="remarks" name="remarks"></textarea>
                <br/><br/>
                <label htmlFor="rating">Rating</label>&nbsp;
                <input placeholder="rating" type="number" min={1} max={5} value={FormData.rating} onChange={handelInputChange} id="rating" name="rating"/>
                <br/><br/>
                <button>Add comment</button>
            </form>
        </div>
    )
}