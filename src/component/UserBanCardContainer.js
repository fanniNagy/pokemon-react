import React, {useState, useEffect, useContext} from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import userContext from "./authorization/UserContext";

const UserBanCardContainer = () => {
    const {user} = useContext(userContext);


    useEffect(() => {
        fetchUsers();
    }, []);
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const token = user ? user.token : null;
        const data = await fetch("http://localhost:8080/admin/users",{
            method: "get",
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
        const users = await data.json();
        setUsers(users);
    };

    const banUser = id => {
        const token = user ? user.token : null;
        fetch("http://localhost:8080/admin/ban/" + id,{
            method: "put",
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
    };

    return (
        <div className={"card-container"}>
            {users.map(user => (
                <Card
                    bg="light"
                    style={{
                        width: "18rem",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Card.Header style={{ backgroundColor: "transparent" }}>
                        {user.name}
                    </Card.Header>
                    <Button
                        onClick={() => {
                            banUser(user.id);
                        }}
                        variant="outline-danger"
                    >
                        BAN
                    </Button>
                </Card>
            ))}
        </div>
    );
};

export default UserBanCardContainer;