import React from "../../../node_modules/react"
function Conditional(props){
   /* if (props.isPageLoading === true){
        return (
            <h1>Page is Loading</h1>    
        )
    } else {
        return (
            <h1>Page Loaded</h1>    
        )
    }
    */
   
    return(
        <div>{props.isPageLoading ? <h1>Page is Loading</h1> : <h1>Page Loaded</h1>}</div>
    )

}

export default Conditional