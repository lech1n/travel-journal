import React from "react"
import Nav from "./Nav"
import Main from "./Main"
import data from "./data.js"


export default function App() {
    const renderData =  data.map(el =>{
        return(
            <Main 
            key = {el.id} 
            {...el}
             />
         )
    })
    return(
    <div>
    <Nav />
    {renderData}
    </div>
    )

}