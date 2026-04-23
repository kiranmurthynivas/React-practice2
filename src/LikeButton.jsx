import { useState } from "react"

export default function LikeButton() {
    let [isLike , setisLike] = useState(false);
    let [clicks , setclicks] = useState(0);

    let toggleLike = () => {
        setisLike(!isLike);
        setclicks(clicks+1);
    };

    let likeStyle = {color: "red"};

    return (
        <div>
            <p>Clicks = {clicks}</p>
            <p onClick={toggleLike}  >
                {isLike ? <i className="fa-regular fa-heart" ></i> : <i className="fa-solid fa-heart" style={likeStyle}></i>}
            </p>
        </div>   
    )
}