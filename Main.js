import React from "react"

export default function Main(props) {
    return (
        <section> 
            <div className="img-container">
            <img src={`./img/${props.imageUrl}` }  width = "70%"/>
            </div>
            
            
            <div className="info-container">
            
            <div className="location-container">
                <img  src="./img/location.png"/>
                <span> {props.location} </span> 
                <a href={props.googleMapsUrl} target="_blank">View on  Google Maps</a> 
            </div>
            
            <h1 className="title">{props.title} </h1>
            
            <div className="date-container">
                <span> {props.startDate} -</span>
                <span> {props.endDate}</span>
           
           </div>
                <p> {props.description}</p>     
           </div>    
        </section>
    )
}