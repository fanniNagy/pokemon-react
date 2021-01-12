import React, {useState} from "react";

export default function FriendRequest({token, username}){
    const [formData, setFormData] = useState("");
    const [success, setSuccess] = useState(false);

    function RecruitFriend(event){
        setFormData(event.target.value);
    }

    function initiateSuccessMessage(){
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
    }

    function submitFriendRequest(event){
        event.preventDefault();
        console.log(formData);
        async function fetchData() {
            const response = await fetch(`http://localhost:8080/user/request-by-name/${username}/request-friend/${formData}`, {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
                credentials:"same-origin"
            } );
            if (response.status === 404 || response.status === 403) {
                console.log(response);
            } else {
                initiateSuccessMessage();

                console.log(response);
            }
        }
        fetchData();

    }

    return(
        <form onSubmit={event => submitFriendRequest(event)}>
            {success ? <div> Request sent to {formData}! </div> : null}
            <input id="friendRequestInput" onChange={(event) => RecruitFriend(event)}/>
            <button type="submit">Request Friend</button>
        </form>
    );
}