import React from "react";
import Description from "./Description";
import Image from "./Image";
import Developers from "./Developer";

function Animal(){
    return(
        <div>
            <h1>Tiger</h1>
            <Description/>
            <Image/>
            <Developers/>
        </div>
    );
}

export default Animal;