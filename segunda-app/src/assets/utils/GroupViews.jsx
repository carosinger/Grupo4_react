import React from "react";

import groupList from "./grupos.json"
import Card1 from "./Card1"


const GroupView = () => {
    const groups = groupList.grupos;

    return (
        <div>
            {groups.map((group) => {
                return <Card1 key={group.id} group={group} />;
            })}
        </div>
    );

};

export default GroupView

