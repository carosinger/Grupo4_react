import React from "react";

const Card1 = ({ group }) => {
    return (
        <div
            style={{
                width: "600px",
                border: "2px solid green",
                margin: "10px",
                padding: "10px",
                borderRadius: "30px",
            }
        }>
            <h1>ID: {group.id}</h1>
            <h2>Team Leader: {group.leader}</h2>
            <h3>Members: {group.members[0]}</h3>
            <h3>{group.members[1]}</h3>         
            <h3>{group.members[2]}</h3>
            <h3>{group.members[3]}</h3>
            <h3>{group.members[4]}</h3>     
            <h3>{group.members[5]}</h3>            
        </div>
    );

}; 

export default Card1

