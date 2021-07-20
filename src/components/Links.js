import React from "react";


function Links(props){
    return(
        <>
            <h3>Links</h3>
            <a href={props.github}>{props.github}</a>
            <a href={props.linkedin}>{props.linkedin}</a>
            {/* <div>{props.link}</div>
            <div>{props.link2}</div> */}
            
        </>
    )
}

export default Links;