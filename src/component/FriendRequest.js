import React, {useState} from "react";

export default function FriendRequest({token, username}){
    const [formData, setFormData] = useState("");

    function RecruitFriend(event){
        setFormData(event.target.value);
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
                console.log(response)
            }
        }
        fetchData();

    }

    return(
        <form onSubmit={event => submitFriendRequest(event)}>
            <input onChange={(event) => RecruitFriend(event)}/>
            <button type="submit">Request Friend</button>
        </form>
    );
}