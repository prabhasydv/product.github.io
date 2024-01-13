import React from "react";

const Productstwo=()=>{
    return(
        <div className="yadav">
               <div className="card" style={{ width: '20rem', marginLeft:"20px",height:"500px",cursor: "pointer" }}>
               <div className="card-img-top"  />
      <div className="card-body">
        <p className="card-text">
          <h5>France </h5>
          <br/>
          France is home to the breathtaking French Alps, a majestic mountain range renowned for its picturesque landscapes and world-class ski resorts.
        </p>
      </div>
    </div>
    <div className="card" style={{ width: '20rem', height:"500px",cursor: "pointer"}}>
    <div className="card-img-top2"  />
      <div className="card-body">
        <p className="card-text">
          <h5>Dubai</h5>
          <br/>
          Dubai, a dazzling city in the United Arab Emirates, stands as a symbol of modern luxury and innovation. 
        </p>
      </div>
    </div>
    <div className="card" style={{ width: '20rem',marginRight:"10px", height:"500px",cursor: "pointer"}}>
      <div className="card-img-top3"  />
      <div className="card-body">
        <p className="card-text">
        <h5>Switzerland</h5>
        <br/>
        Switzerland, nestled in the heart of Europe, is a land of pristine beauty, adorned with the majestic Swiss Alps and serene lakes.
        </p>
      </div>
    </div>
    
        </div>
        
    )
}
export default Productstwo