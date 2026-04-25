import { useState } from "react"

export default function Form() {

    let [formData, setFormData] = useState({ fullName : "", userName : ""});
    // let handleNameChange = (event) => {
    //     setFullName(event.traget.value);
    // }

    // let handleUserName = (event) => {
    //     setUserName(event.traget.value);
    // }

    let handelInputChange = (event) => {
        setFormData( (currData) => {  
            return {...currData, [event.target.name] : event.target.value};
        });
    };

    let handelSubmit = () => {
        event.preventDefault();
        setFormData({ fullName : "", userName : ""});
    }


    return (
        <form onSubmit={handelSubmit}>
            <label htmlFor="fullName">Full Name</label>
            <input placeholder="Enter Full Name" type="text" value={formData.fullName} onChange={handelInputChange} id="fullName" name="fullName"/>
            <br></br>
            <label htmlFor="userName">User Name</label>
            <input placeholder="Enter Full Name" type="text" value={formData.userName} onChange={handelInputChange} id="userName" name="userName"/>
            <button>Submit</button>
        </form>
    )
}