import React from "react";

function Plan(props){


    const arr = props.p
    return <>
    
   {/* 1st Method to display & delete tasks  */}

    <li className="shadow bg-white text-dark p-2 my-2 col-sm-9">{props.value}</li>
    <button className="btn btn-warning my-2 col-sm-2 offset-1" onClick={()=>{props.send_data(props.id)}}>X</button>



{/* 2nd Method to display & delete tasks  */}


    {/* {
        arr.map((value,i) => {
           return (<React.Fragment>
            <li className="shadow bg-white text-dark p-2 my-2 col-sm-9">{value}</li>
            <button className="btn btn-warning my-2 col-sm-2 offset-1" onClick={()=>{props.send_data(i)}}>X</button>
           </React.Fragment>) 
        })
    } */}
    
    </>
}

export default Plan;