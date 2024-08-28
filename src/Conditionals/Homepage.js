import React from "react";
import UserGreetings from "./UserGreetings";
function Homepage(){
    return(
        <div>
            <UserGreetings isLoggedIn={true}></UserGreetings>
        </div>
    );
}

export default Homepage;