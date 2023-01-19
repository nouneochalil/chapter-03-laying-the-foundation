import React from "react"
import ReactDOM from "react-dom/client"


// creating react element and rendering in react_root
const heading1 = (
<h1 id="title" key = "h2">Namaste React</h1>
)
const HeaderComponent = ()=>{
    return(
        <div>
        <h2>Namaste react functional component</h2>
        <h2>this is a h2 tag</h2>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading1)
root.render(<HeaderComponent/>)

