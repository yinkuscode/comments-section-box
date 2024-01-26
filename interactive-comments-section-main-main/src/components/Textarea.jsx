import React from "react"

function Textarea(props){
    return(
        <div>
            <textarea classname = {props.yinka} name="" id="" cols="30" rows="10">
                {props.children}
            </textarea>
        </div>
    )
}

export default Textarea;